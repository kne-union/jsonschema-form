import { createBlock, createChoiceOption, createField, MAX_BLOCK_DEPTH } from '@kne/form-creator';
import { fieldFromSchema } from './fieldFromSchema';
import { mergeAllOf } from './mergeAllOf';
import { resolveRef } from './resolveRef';

const prepare = (schema, root) => {
  if (!schema || typeof schema !== 'object') {
    return schema;
  }
  const resolved = resolveRef(schema, root);
  return mergeAllOf(resolved, root);
};

const isObjectSchema = schema => schema && (schema.type === 'object' || (!schema.type && schema.properties));

const isArraySchema = schema => schema && schema.type === 'array';

const branchTitle = (branch, index) => branch.title || branch.description || `选项${index + 1}`;

/**
 * 将 object schema 的 properties 拆成：扁平 fields + 子模块 blocks
 */
const splitObjectProperties = (schema, root, { depth }) => {
  const fields = [];
  const blocks = [];
  const required = new Set(schema.required || []);
  const properties = schema.properties || {};

  Object.keys(properties).forEach(name => {
    const raw = prepare(properties[name], root);
    if (!raw) {
      return;
    }

    if (Array.isArray(raw.oneOf) && raw.oneOf.length) {
      blocks.push(convertOneOf(name, raw, root, { depth: depth + 1, mode: 'single' }));
      return;
    }
    if (Array.isArray(raw.anyOf) && raw.anyOf.length) {
      blocks.push(convertOneOf(name, raw, root, { depth: depth + 1, mode: 'multiple' }));
      return;
    }
    if (isArraySchema(raw)) {
      blocks.push(convertArray(name, raw, root, { depth: depth + 1 }));
      return;
    }
    if (isObjectSchema(raw)) {
      blocks.push(convertObjectBlock(name, raw, root, { depth: depth + 1 }));
      return;
    }

    const field = fieldFromSchema(name, raw, { required: required.has(name) });
    if (field) {
      fields.push(field);
    }
  });

  return { fields, blocks };
};

const convertObjectBlock = (name, schema, root, { depth }) => {
  const prepared = prepare(schema, root);
  const { fields, blocks } = splitObjectProperties(prepared, root, { depth });
  return createBlock('object', {
    name,
    title: prepared.title || name,
    subtitle: prepared.description || '',
    list: fields,
    blocks
  });
};

const convertArray = (name, schema, root, { depth }) => {
  const prepared = prepare(schema, root);
  const items = prepare(prepared.items || { type: 'string' }, root);

  // 标量数组 → multiField
  if (!isObjectSchema(items) && !isArraySchema(items) && !items?.oneOf && !items?.anyOf) {
    const sample = fieldFromSchema(name, items, { required: false }) || createField({ name, type: 'Input' });
    return createBlock('multiField', {
      name,
      label: prepared.title || name,
      title: prepared.title || name,
      fieldType: sample.type || 'Input',
      addText: prepared['x-addText'] || ''
    });
  }

  // 对象数组 → list + itemBlocks
  if (isObjectSchema(items)) {
    const { fields, blocks } = splitObjectProperties(items, root, { depth });
    return createBlock('list', {
      name,
      title: prepared.title || name,
      subtitle: prepared.description || '',
      minLength: prepared.minItems,
      maxLength: prepared.maxItems,
      addText: prepared['x-addText'] || '',
      list: fields,
      itemBlocks: depth > MAX_BLOCK_DEPTH ? [] : blocks
    });
  }

  // 其它（嵌套 array 等）降级为 list + 单字段
  const field = fieldFromSchema('value', items, { required: false }) || createField({ name: 'value', type: 'Input', label: '值' });
  return createBlock('list', {
    name,
    title: prepared.title || name,
    list: [field],
    itemBlocks: []
  });
};

const convertBranchContent = (branch, root, { depth }) => {
  const prepared = prepare(branch, root);
  if (isObjectSchema(prepared)) {
    return splitObjectProperties(prepared, root, { depth });
  }
  if (isArraySchema(prepared)) {
    return { fields: [], blocks: [convertArray('items', prepared, root, { depth })] };
  }
  const field = fieldFromSchema('value', prepared, { required: false });
  return { fields: field ? [field] : [], blocks: [] };
};

const convertOneOf = (name, schema, root, { depth, mode }) => {
  const prepared = prepare(schema, root);
  const branches = mode === 'multiple' ? prepared.anyOf : prepared.oneOf;
  const discriminator = prepared.discriminator && typeof prepared.discriminator === 'object' ? prepared.discriminator : undefined;

  const options = (branches || []).map((branch, index) => {
    const resolved = prepare(branch, root);
    const { fields, blocks } = convertBranchContent(resolved, root, { depth: depth + 1 });
    return createChoiceOption({
      id: resolved.const != null ? String(resolved.const) : `opt_${index}`,
      title: branchTitle(resolved, index),
      list: fields,
      blocks: depth > MAX_BLOCK_DEPTH ? [] : blocks
    });
  });

  return createBlock('choice', {
    title: prepared.title || name,
    subtitle: prepared.description || '',
    mode: mode === 'multiple' ? 'multiple' : 'single',
    selectorName: discriminator?.propertyName || name,
    selectorInData: true,
    discriminator,
    options
  });
};

/**
 * JSON Schema → @kne/form-creator Schema
 *
 * 支持：嵌套 object/list、oneOf→choice(single)、anyOf→choice(multiple)、
 * allOf 合并、同文档 $ref、format / x-widget 字段映射。
 */
export const jsonSchemaToFormCreatorSchema = (jsonSchema, options = {}) => {
  const root = jsonSchema && typeof jsonSchema === 'object' ? jsonSchema : {};
  const prepared = prepare(root, root);
  const column = options.column ?? 2;
  const gap = options.gap ?? 24;

  if (!prepared || typeof prepared !== 'object') {
    return {
      title: '',
      subtitle: '',
      column,
      gap,
      blocks: [],
      actions: {
        showSubmit: true,
        showReset: true,
        showCancel: false,
        align: 'center',
        gap: 16
      }
    };
  }

  // 根级 oneOf / anyOf
  if (Array.isArray(prepared.oneOf) && prepared.oneOf.length) {
    return {
      title: prepared.title || '',
      subtitle: prepared.description || '',
      column,
      gap,
      blocks: [convertOneOf('root', prepared, root, { depth: 0, mode: 'single' })],
      actions: undefined
    };
  }
  if (Array.isArray(prepared.anyOf) && prepared.anyOf.length) {
    return {
      title: prepared.title || '',
      subtitle: prepared.description || '',
      column,
      gap,
      blocks: [convertOneOf('root', prepared, root, { depth: 0, mode: 'multiple' })],
      actions: undefined
    };
  }

  if (isArraySchema(prepared)) {
    return {
      title: prepared.title || '',
      subtitle: prepared.description || '',
      column,
      gap,
      blocks: [convertArray(prepared.name || 'items', prepared, root, { depth: 0 })],
      actions: undefined
    };
  }

  const objectSchema = isObjectSchema(prepared) ? prepared : { type: 'object', properties: { value: prepared }, title: prepared.title };

  const { fields, blocks } = splitObjectProperties(objectSchema, root, { depth: 0 });
  const resultBlocks = [];

  if (fields.length) {
    resultBlocks.push(
      createBlock('formInfo', {
        title: objectSchema.title || '',
        subtitle: objectSchema.description || '',
        column,
        gap,
        list: fields,
        blocks: []
      })
    );
  }

  resultBlocks.push(...blocks);

  // 仅有子模块、没有扁平字段时，把根 title 落到第一个 block
  if (!fields.length && resultBlocks[0] && objectSchema.title && !resultBlocks[0].title) {
    resultBlocks[0] = { ...resultBlocks[0], title: objectSchema.title, subtitle: objectSchema.description || resultBlocks[0].subtitle };
  }

  return {
    title: '',
    subtitle: '',
    column,
    gap,
    blocks: resultBlocks,
    actions: undefined
  };
};

export default jsonSchemaToFormCreatorSchema;
