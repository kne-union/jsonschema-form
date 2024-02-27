import React, {useMemo, useRef} from 'react';
import {Button, Empty, Row, Col} from 'antd';
import Form, {
    Input, InputNumber, Switch, Select, TextArea, GroupList, SubmitButton, ResetButton
} from '@kne/react-form-antd';
import InfoPage from './InfoPage';
import listStyle from './list.module.scss';
import formStyle from './form.module.scss';
import '@kne/react-form-antd/dist/index.css';

const renderSchema = (schema, {column, gap, labelHidden}) => {
    if (schema.type === 'object') {
        const children = <Row gutter={[gap, 0]}>
            {Object.keys(schema.properties).map((property) => {
                const item = schema.properties[property];
                //
                return renderSchema(Object.assign({}, item, {
                    propertyRequired: (schema.required || []).indexOf(property) > -1,
                    propertyName: [schema.propertyName, property].filter((key) => !!key).join('.')
                }), {column, gap});
            })}
        </Row>;
        return <Col key={schema.propertyName || 'root'} span={24}>{schema.propertyName ?
            <InfoPage.Part title={schema.title}>
                {children}
            </InfoPage.Part> : children}</Col>;
    }
    if (schema.type === 'array') {
        return <Col key={schema.propertyName || 'root'} span={24}>
            <SchemaArray schema={schema} column={column} gap={gap}/>
        </Col>;
    }
    const rule = [schema.propertyRequired ? 'REQ' : '', schema.pattern ? `REG_EXP-${schema.pattern}` : '', (schema.hasOwnProperty('minLength') || schema.hasOwnProperty('maxLength')) ? `LEN-${schema.minLength}${schema.hasOwnProperty('maxLength') ? `-${schema.maxLength}` : ''}` : ''].join(' ');
    if (Array.isArray(schema.enum) && schema.enum.length > 0) {
        return <Col key={schema.propertyName} span={Math.round(24 / column)}>
            <Select name={schema.propertyName} label={schema.title} rule={rule} labelHidden={labelHidden}
                    value={schema.default}
                    options={schema.enum.map((item) => ['integer', 'number', 'string'].indexOf(schema.type) > -1 ? ({
                        label: item, value: item
                    }) : item)}/>
        </Col>
    }
    if (schema.type === 'string' && schema.maxLength > 20) {
        return <Col key={schema.propertyName} span={24}>
            <TextArea name={schema.propertyName} label={schema.title} rule={rule} labelHidden={labelHidden}
                      value={schema.default} maxLength={schema.maxLength} showCount allowClear
                      autoSize={{minRows: 2}}/>
        </Col>
    }
    if (schema.type === 'string') {
        return <Col key={schema.propertyName} span={Math.round(24 / column)}>
            <Input name={schema.propertyName} labelHidden={labelHidden}
                   label={schema.title} rule={rule}
                   value={schema.default}/>
        </Col>;
    }
    if (schema.type === 'boolean') {
        return <Col key={schema.propertyName} span={Math.round(24 / column)}>
            <Switch name={schema.propertyName} labelHidden={labelHidden}
                    label={schema.title} rule={rule}
                    checked={schema.default}/>
        </Col>
    }
    if (['integer', 'number'].indexOf(schema.type) > -1) {
        return <Col key={schema.propertyName} span={Math.round(24 / column)}>
            <InputNumber name={schema.propertyName} labelHidden={labelHidden}
                         label={schema.title} rule={rule}
                         value={schema.default}/>
        </Col>;
    }
    return null;
};

const SchemaArray = ({schema, column, gap}) => {
    const ref = useRef(null);
    return <InfoPage.Part className={listStyle['list-part']} title={schema.title}
                          extra={<Button type="link" onClick={() => {
                              ref.current.onAdd();
                          }}>添加</Button>}>
        <GroupList ref={ref} name={schema.propertyName} defaultLength={1}
                   empty={<Empty description=""><Button type="primary" onClick={() => {
                       ref.current.onAdd();
                   }}>添加</Button></Empty>}>{(key, {
            index, onRemove
        }) => {
            const isBasic = ['array', 'object'].indexOf(schema?.items?.type) === -1;
            return <div key={key} className={listStyle["list-item"]}>
                <InfoPage.Part className={listStyle["list-item-part"]} title={`${schema.title} ${index + 1}`}
                               extra={<Button type="link" danger onClick={onRemove}>删除</Button>}>
                    <Row gutter={[gap, 0]}>
                        {renderSchema(Object.assign({}, schema.items, isBasic ? {
                            title: schema.title, propertyName: schema.propertyName
                        } : {}), Object.assign({}, {column, gap}, isBasic ? {
                            column: 1, labelHidden: true
                        } : {}))}
                    </Row>
                </InfoPage.Part>
            </div>
        }}</GroupList>
    </InfoPage.Part>;
};

const JSONSchemaForm = ({column, gap, schema, rules, footer, ...props}) => {
    const formChildren = useMemo(() => {
        return renderSchema(schema, {column, gap});
    }, [schema]);
    return <Form className={formStyle['form']} {...props} rules={Object.assign({}, rules, {
        REG_EXP: (value, pattern) => {
            const regExp = new RegExp(pattern);
            return {
                result: regExp.test(value), msg: '%s不符合规则'
            };
        }
    })}>
        <InfoPage>
            <Row gutter={[gap, 0]}>
                {formChildren}
            </Row>
            {footer || <Row gutter={[gap, 0]} justify="center">
                <Col><SubmitButton>保存</SubmitButton></Col>
                <Col><ResetButton>重置</ResetButton></Col>
            </Row>}
        </InfoPage>
    </Form>;
};

JSONSchemaForm.defaultProps = {
    column: 2, gap: 24, type: 'inner'
};

export default JSONSchemaForm;
