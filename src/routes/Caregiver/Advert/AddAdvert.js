import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select, Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { advertType, advertTime, createAdvert } from "../../../appRedux/actions"
import CircularProgress from '../../../components/CircularProgress/CircularProgress'

const AddAdvert = () => {
    const dispatch = useDispatch();
    const { advert_types, advert_times } = useSelector(({ advert }) => advert);
    const { loading } = useSelector(({ common }) => common);

    const initialField = [
        {
            name: ['advert_type_id'],
            value: null,
        },
        {
            name: ['advert_time_id'],
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
        dispatch(createAdvert(values))
        setFields(initialField)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        dispatch(advertTime())
        dispatch(advertType())
        console.log(advert_times)
        console.log(advert_types)
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
                        name="advert_type_id"
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
                            {advert_types?.map((value, index) => (
                                <Select.Option key={value.advert_type_id} value={value.advert_type_id}>{value.advert_type}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="advert_time_id"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            size="large"
                            placeholder="İlan Süresi"
                            bordered={false}
                            className="pr_input"
                        >
                            {advert_times?.map((value, index) => (
                                <Select.Option key={value.advert_time_id} value={value.advert_time_id}>{value.advert_time}</Select.Option>
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
                        <Button loading={loading} className="pr_button" type="primary" htmlType="submit">
                            Oluştur
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    )
}

export default AddAdvert
