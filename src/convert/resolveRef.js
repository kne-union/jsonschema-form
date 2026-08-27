const dig = (root, pointer) => {
  if (!pointer || pointer === '#') {
    return root;
  }
  const path = String(pointer).replace(/^#\/?/, '');
  if (!path) {
    return root;
  }
  return path.split('/').reduce((node, key) => {
    if (node == null) {
      return undefined;
    }
    const decoded = key.replace(/~1/g, '/').replace(/~0/g, '~');
    return node[decoded];
  }, root);
};

/**
 * 仅解析同文档 `$ref`（`#/definitions/...`、`#/$defs/...`）。
 * 远程 URL、循环引用不支持。
 */
export const resolveRef = (schema, root, stack = []) => {
  if (!schema || typeof schema !== 'object') {
    return schema;
  }
  if (!schema.$ref) {
    return schema;
  }
  const ref = String(schema.$ref);
  if (!ref.startsWith('#')) {
    return schema;
  }
  if (stack.includes(ref)) {
    const { $ref, ...rest } = schema;
    return rest;
  }
  const target = dig(root, ref);
  if (!target || typeof target !== 'object') {
    const { $ref, ...rest } = schema;
    return rest;
  }
  const { $ref, ...local } = schema;
  return resolveRef({ ...target, ...local }, root, [...stack, ref]);
};
