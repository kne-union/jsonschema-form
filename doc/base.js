const {default: JSONSchemaForm} = jsonSchemaForm;
const BaseExample = () => {
    return <JSONSchemaForm onSubmit={(data) => {
        console.log(data);
    }} schema={{
        "title": "个人简历",
        "description": "个人简历",
        "type": "object",
        "required": ["name", "gender"],
        "properties": {
            "name": {
                "type": "string", "title": "姓名", "default": "张三"
            }, "gender": {
                "type": "string", "title": "性别", "enum": ["男", "女"], default: "男"
            }, "age": {
                "type": "integer", "title": "年龄"
            }, "isPLA": {
                "type": "boolean", "title": "是否党员", default: true
            }, "desc": {
                "type": "string", "title": "个人简介", "minLength": 0, "maxLength": 500
            }, "education": {
                "type": "array", "title": "教育经历", "items": {
                    "type": "object", "required": ["schoolName"], "properties": {
                        "schoolName": {
                            "type": "string", "title": "学校名称"
                        }, "type": {
                            "type": "string", "title": "类型", "enum": ["统招", "非统招"]
                        }, "major": {
                            "type": "string", "title": "专业"
                        }, "time": {
                            "type": "object", "title": "时间", "properties": {
                                "startTime": {
                                    "type": "string", "title": "开始时间"
                                }, "endTime": {
                                    "type": "string", "title": "结束时间"
                                }
                            }
                        }, "description": {
                            "type": "string", "title": "简介", "minLength": 0, "maxLength": 500
                        }
                    }
                }
            }, "language": {
                "type": "array", "title": "语言", "items": {
                    "type": "string"
                }
            }
        }
    }}/>;
};

render(<BaseExample/>);
