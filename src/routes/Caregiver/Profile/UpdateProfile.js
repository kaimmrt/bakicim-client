import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { useHistory } from 'react-router-dom';
import { Button, Radio, Form, Input, Card, DatePicker } from 'antd';
import { updateProfile } from '../../../appRedux/actions'

const UpdateProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { authUser } = useSelector(({ auth }) => auth);

    const initialField = [
        {
            name: ['birthday'],
            value: authUser?.birthday ? moment(authUser?.birthday) : null,
        },
        {
            name: ['phone'],
            value: authUser?.phone,
        },
        {
            name: ['city'],
            value: authUser?.city,
        },
        {
            name: ['district'],
            value: authUser?.district,
        },
        {
            name: ['adress'],
            value: authUser?.adress,
        },
        {
            name: ['gender_id'],
            value: authUser?.gender_id,
        },

    ]

    const onFinish = (values) => {
        const denem = { ...authUser, ...values };
        dispatch(updateProfile({ user_id: authUser.user_id, data: denem }))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="app-container">
            <Card>
                <h2>Profil Bilgileri Güncelle</h2><hr style={{ width: '100%', marginBottom: 50 }} />

                <Form
                    name="basic"
                    labelCol={{ span: 2 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    fields={initialField}
                >
                    <Form.Item
                        label="D. Tarihi"
                        name="birthday"
                    >
                        <DatePicker className="pr_input w-80" />
                    </Form.Item>

                    <Form.Item
                        label="Telefon"
                        name="phone"
                    >
                        <Input type="tel" className="pr_input w-80" />
                    </Form.Item>

                    <Form.Item
                        label="Şehir"
                        name="city"
                    >
                        <Input className="pr_input w-80" />
                    </Form.Item>

                    <Form.Item
                        label="İlçe"
                        name="district"
                    >
                        <Input className="pr_input w-80" />
                    </Form.Item>

                    <Form.Item
                        label="Adres"
                        name="adress"
                    >
                        <Input.TextArea className="pr_input w-80" />
                    </Form.Item>

                    <Form.Item name="gender_id" label="Cinsiyet">
                        <Radio.Group>
                            <Radio value={1}>Erkek</Radio>
                            <Radio value={2}>Kadın</Radio>
                        </Radio.Group>
                    </Form.Item>


                    <div style={{ display: 'flex' }}>
                        <Button className="pr_button" type="primary" htmlType="submit">
                            Güncelle
                        </Button>

                        <Button onClick={() => history.push('../profile')} className="sc_button" style={{ marginLeft: 20 }} >
                            Vazgeç
                        </Button>
                    </div>

                </Form>
            </Card>

        </div>
    )
}

export default UpdateProfile
