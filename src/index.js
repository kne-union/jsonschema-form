import React, { useMemo } from 'react';
import { SchemaRenderer } from '@kne/form-creator';
import { jsonSchemaToFormCreatorSchema } from './convert/jsonSchemaToFormCreatorSchema';
import '@kne/form-creator/dist/index.css';

/**
 * 将 JSON Schema 转为 form-creator Schema 并用 SchemaRenderer 渲染。
 *
 * @param {object} props
 * @param {object} props.schema JSON Schema
 * @param {number} [props.column=2]
 * @param {number} [props.gap=24]
 * @param {object} [props.formProps] 传给 SchemaRenderer / Form
 * @param {Function} [props.onSubmit] 简写：写入 formProps.onSubmit
 * @param {object} [props.rules] 额外校验规则（透传 formProps.rules）
 * @param {React.ReactNode|false} [props.footer] 兼容旧 API：false 时隐藏操作区
 * @param {React.ReactNode|object|false} [props.actions] SchemaRenderer actions
 */
const JSONSchemaForm = ({ schema, column = 2, gap = 24, formProps, onSubmit, rules, footer, actions, ...rest }) => {
  const creatorSchema = useMemo(() => jsonSchemaToFormCreatorSchema(schema, { column, gap }), [schema, column, gap]);

  const mergedFormProps = useMemo(
    () => ({
      ...rest,
      ...formProps,
      ...(onSubmit ? { onSubmit } : {}),
      ...(rules ? { rules: { ...(formProps?.rules || {}), ...rules } } : {})
    }),
    [rest, formProps, onSubmit, rules]
  );

  const actionProps = footer === false || actions === false ? { showActions: false } : actions !== undefined ? { actions } : footer ? { actions: footer } : {};

  return <SchemaRenderer schema={creatorSchema} formProps={mergedFormProps} {...actionProps} />;
};

export { jsonSchemaToFormCreatorSchema };
export { resolveRef } from './convert/resolveRef';
export { mergeAllOf } from './convert/mergeAllOf';
export { fieldFromSchema, FORMAT_FIELD_MAP } from './convert/fieldFromSchema';
export default JSONSchemaForm;
