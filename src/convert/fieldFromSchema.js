import { createField } from '@kne/form-creator';

/** JSON Schema format → form-creator 字段类型 / 规则 */
export const FORMAT_FIELD_MAP = {
  email: { type: 'Input', ruleExtra: 'EMAIL' },
  date: { type: 'DatePicker' },
  'date-time': { type: 'DatePicker', props: { showTime: true } },
  time: { type: 'DatePicker', props: { picker: 'time' } },
  uri: { type: 'Input' },
  url: { type: 'Input' },
  tel: { type: 'Input', ruleExtra: 'TEL' },
  phone: { type: 'Input', ruleExtra: 'TEL' }
};

const widgetOf = schema => schema?.['x-widget'] || schema?.['ui:widget'] || schema?.['x-field'] || null;

const buildRule = (schema, { required } = {}) => {
  const parts = [];
  if (required) {
    parts.push('REQ');
  }
  const formatMap = schema.format ? FORMAT_FIELD_MAP[schema.format] : null;
  if (formatMap?.ruleExtra) {
    parts.push(formatMap.ruleExtra);
  }
  if (schema.minLength != null || schema.maxLength != null) {
    const min = schema.minLength != null ? schema.minLength : 0;
    const max = schema.maxLength != null ? schema.maxLength : 99999;
    parts.push(`LEN-${min}-${max}`);
  }
  return parts.filter(Boolean).join(' ');
};

const enumOptions = schema => {
  if (!Array.isArray(schema.enum) || !schema.enum.length) {
    return null;
  }
  const labels = Array.isArray(schema.enumNames) ? schema.enumNames : schema.enum;
  return schema.enum.map((value, index) => ({
    label: labels[index] != null ? String(labels[index]) : String(value),
    value
  }));
};

/**
 * 标量 / 枚举 JSON Schema → form-creator field
 */
export const fieldFromSchema = (name, schema, { required = false } = {}) => {
  if (!schema || typeof schema !== 'object') {
    return null;
  }

  const widget = widgetOf(schema);
  const formatHint = schema.format ? FORMAT_FIELD_MAP[schema.format] : null;
  const options = enumOptions(schema);
  const rule = buildRule(schema, { required });
  const baseProps = {
    ...(formatHint?.props || {}),
    ...(schema.default !== undefined ? { defaultValue: schema.default } : {}),
    ...(schema.placeholder ? { placeholder: schema.placeholder } : {}),
    ...(schema['x-props'] && typeof schema['x-props'] === 'object' ? schema['x-props'] : {})
  };

  if (widget) {
    return createField({
      name,
      label: schema.title || name,
      type: widget,
      rule,
      tips: schema.description || '',
      props: {
        ...baseProps,
        ...(options ? { options } : {})
      }
    });
  }

  if (options) {
    const type = schema.type === 'array' ? 'CheckboxGroup' : options.length <= 3 ? 'RadioGroup' : 'Select';
    return createField({
      name,
      label: schema.title || name,
      type,
      rule,
      tips: schema.description || '',
      props: { ...baseProps, options }
    });
  }

  if (schema.type === 'boolean') {
    return createField({
      name,
      label: schema.title || name,
      type: 'Switch',
      rule,
      tips: schema.description || '',
      props: {
        ...baseProps,
        ...(schema.default !== undefined ? { defaultChecked: !!schema.default } : {})
      }
    });
  }

  if (schema.type === 'integer' || schema.type === 'number') {
    return createField({
      name,
      label: schema.title || name,
      type: 'InputNumber',
      rule,
      tips: schema.description || '',
      props: {
        ...baseProps,
        ...(schema.minimum != null ? { min: schema.minimum } : {}),
        ...(schema.maximum != null ? { max: schema.maximum } : {})
      }
    });
  }

  if (schema.type === 'string') {
    const useTextArea = schema['x-textarea'] || (schema.maxLength != null && schema.maxLength > 20);
    if (useTextArea) {
      return createField({
        name,
        label: schema.title || name,
        type: 'TextArea',
        rule,
        tips: schema.description || '',
        props: {
          ...baseProps,
          ...(schema.maxLength != null ? { maxLength: schema.maxLength, showCount: true } : {}),
          autoSize: { minRows: 2 }
        }
      });
    }
  }

  return createField({
    name,
    label: schema.title || name,
    type: formatHint?.type || 'Input',
    rule,
    tips: schema.description || '',
    props: baseProps
  });
};
