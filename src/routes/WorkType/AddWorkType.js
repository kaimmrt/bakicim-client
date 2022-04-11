import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select, Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { workTypes, createWorkTypePrice } from "../../appRedux/actions"
import CircularProgress from '../../components/CircularProgress/CircularProgress'

const AddWorkType = () => {
    const dispatch = useDispatch();
    const { work_types, loading } = useSelector(({ workType }) => workType);
    const initialField = [
        {
            name: ['work_type_id'],
            value: null,
        },
        {
            name: ['price'],
            value: null,
        },
        {
            name: ['note'],
            value: null,
        },
    ]
    const [fields, setFields] = useState(initialField);

    const onFinish = (values) => {
        dispatch(createWorkTypePrice(values))
        setFields(initialField)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        dispatch(workTypes())
    }, [])

    if (loading) return <CircularProgress />
    return (
        <div className="app-container">
            <Card title="İlan Oluştur" className="card-container">
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    fields={fields}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    labelCol={{ span: 2 }}
                >
                    <Form.Item
                        name="work_type_id"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            size="large"
                            placeholder="İlan Tipi"
                            bordered={false}
                            className="pr_input"
                        >
                            {work_types.map((value, index) => (
                                <Select.Option key={value.work_type_id} value={value.work_type_id}>{value.work_type}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="price"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input size="large" placeholder="Fiyat" className="pr_input" min="0" type="number" />
                    </Form.Item>

                    <Form.Item
                        name="note"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.TextArea size="large" placeholder="Not" className="pr_input" />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button className="pr_button" type="primary" htmlType="submit">
                            Oluştur
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    )
}

export default AddWorkType
