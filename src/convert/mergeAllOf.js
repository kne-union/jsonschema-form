import { resolveRef } from './resolveRef';

const uniq = list => Array.from(new Set(list.filter(Boolean)));

/**
 * 浅合并 allOf 分支的 properties / required（后者覆盖同名属性；required 取并集）。
 */
export const mergeAllOf = (schema, root) => {
  if (!schema || !Array.isArray(schema.allOf) || !schema.allOf.length) {
    return schema;
  }

  const base = { ...schema };
  delete base.allOf;

  const merged = {
    ...base,
    properties: { ...(base.properties || {}) },
    required: [...(base.required || [])]
  };

  schema.allOf.forEach(branch => {
    const resolved = resolveRef(branch, root);
    const next = mergeAllOf(resolved, root);
    Object.assign(merged, {
      title: merged.title || next.title,
      description: merged.description || next.description,
      type: merged.type || next.type
    });
    Object.assign(merged.properties, next.properties || {});
    merged.required = uniq([...(merged.required || []), ...(next.required || [])]);
  });

  return merged;
};
