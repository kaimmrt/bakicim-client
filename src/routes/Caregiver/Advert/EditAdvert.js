import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input, Button, Select, Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { advertTime, editAdvert, findAdvert } from "../../../appRedux/actions"
import CircularProgress from '../../../components/CircularProgress/CircularProgress'

const EditAdvert = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { advert_id } = useParams();
    const { advert_times, advert } = useSelector(({ advert }) => advert);
    const { loading } = useSelector(({ common }) => common);

    const initialField = [
        {
            name: ['advert_time_id'],
            value: advert?.advert_time_id,
        },
        {
            name: ['advert_type_id'],
            value: advert?.advert_type_id,
        },

        {
            name: ['price'],
            value: advert?.price,
        },
        {
            name: ['note'],
            value: advert?.note,
        },
    ]

    const onFinish = (values) => {
        values['advert_id'] = advert_id
        dispatch(editAdvert(values))
        history.push('../ilanlarım')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    useEffect(() => {
        dispatch(advertTime())
        dispatch(findAdvert(advert_id))
        console.log(initialField)
    }, [])

    if (loading) return <CircularProgress />
    return (
        <div className="app-container">
            <Card title="İlan Düzenle" className="card-container">
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    fields={initialField}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    labelCol={{ span: 2 }}
                >
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
                            <Select.Option key={1} value={1}>Hasta Bakımı</Select.Option>
                            <Select.Option key={2} value={2}>Yaşlı Bakımı</Select.Option>
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
                            Güncelle
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    )
}

export default EditAdvert
