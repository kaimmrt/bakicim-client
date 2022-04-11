import React, { useEffect, useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignUp } from "../appRedux/actions";

const FormItem = Form.Item;

const SignUp = () => {
    const [user_type_id, setUserTypeId] = useState("")
    const [step, setStep] = useState(1)

    const dispatch = useDispatch();
    const authUser = useSelector(({ auth }) => auth.authUser);
    const history = useHistory();


    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const onFinish = values => {
        dispatch(userSignUp({ values: values, user_type_id: user_type_id }));
    };

    useEffect(() => {
        if (authUser !== null) {
            history.push('/signin');
        }
    }, [authUser]);

    return (
        <div className="auth-container">
            <div className="auth-left-container-signin">
            </div>
            <div className="auth-form">
                <h1 className="auth-header">Üye Ol</h1>

                {
                    step == 1 || user_type_id == ""
                        ?
                        <>
                            <div className="signup-radio-container">
                                <div id="caregiver" onClick={() => setUserTypeId("1")} style={user_type_id == "1" ? { background: '#00adb5', color: 'white' } : { background: 'white', color: '#00adb5' }} className="signup-radio" >
                                    <p>Bakıcı</p>
                                    <img src={require('../images/icons/caregiver.png').default} style={{ width: 50 }} />
                                </div>

                                <div id="old" onClick={() => setUserTypeId("2")} style={user_type_id == "2" ? { background: '#00adb5', color: 'white' } : { background: 'white', color: '#00adb5' }} className="signup-radio" >
                                    <p>Bakılan</p>
                                    <img src={require('../images/icons/old.png').default} style={{ width: 50 }} />
                                </div>
                            </div>
                            <Button type="primary" className="auth-btn-typ-3" onClick={() => setStep(2)}>Devam Et</Button>
                        </>

                        :
                        user_type_id == 1
                            ?
                            <Form
                                initialValues={{ remember: true, gender_id: 1 }}
                                name="basic"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                className="gx-signin-form gx-form-row0" style={{ textAlign: 'center' }}>

                                <FormItem name="gender_id" >
                                    <Radio.Group >
                                        <Radio value={1}>Kadın</Radio>
                                        <Radio value={2}>Erkek</Radio>
                                    </Radio.Group>
                                </FormItem>


                                <FormItem rules={[{ required: true, message: 'Please enter your first and last name!' }]} name="name" >
                                    <Input className="auth-input" placeholder="First and Last Name" />
                                </FormItem>

                                <FormItem name="email" rules={[{
                                    required: true, type: 'email', message: 'Please enter a valid e-mail address!',
                                }]}>
                                    <Input className="auth-input" placeholder="Email" />
                                </FormItem>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password className="auth-input" placeholder="Password" />
                                </Form.Item>

                                <Form.Item
                                    name="confirm"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please re-enter your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The two passwords you entered do not match!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password className="auth-input" placeholder="Password Again" />
                                </Form.Item>


                                <FormItem>
                                    <Button type="primary" className="auth-btn-typ-1" htmlType="submit">
                                        Sign Up
                                    </Button>
                                    <span>or</span> <Link className="auth-btn-typ-2" to="/signin">Sign in</Link>

                                </FormItem>

                                <Button type="primary" className="auth-btn-typ-3" style={{ marginTop: 50 }} onClick={() => setStep(1)}>Geri Dön</Button>


                            </Form>
                            :
                            <Form
                                initialValues={{ remember: true }}
                                name="basic"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                className="gx-signin-form gx-form-row0" style={{ textAlign: 'center' }}>

                                <FormItem rules={[{ required: true, message: 'Please enter your first and last name!' }]} name="name" >
                                    <Input className="auth-input" placeholder="First and Last Name" />
                                </FormItem>

                                <FormItem name="email" rules={[{
                                    required: true, type: 'email', message: 'Please enter a valid e-mail address!',
                                }]}>
                                    <Input className="auth-input" placeholder="Email" />
                                </FormItem>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password className="auth-input" placeholder="Password" />
                                </Form.Item>

                                <Form.Item
                                    name="confirm"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please re-enter your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The two passwords you entered do not match!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password className="auth-input" placeholder="Password Again" />
                                </Form.Item>

                                <FormItem>
                                    <Button type="primary" className="auth-btn-typ-1" htmlType="submit">
                                        Sign Up
                                    </Button>
                                    <span>or</span> <Link className="auth-btn-typ-2" to="/signin">Sign in</Link>

                                </FormItem>

                                <Button type="primary" className="auth-btn-typ-3" style={{ marginTop: 50 }} onClick={() => setStep(1)}>Geri Dön</Button>

                            </Form>
                }

            </div>
        </div>
    )
}

export default SignUp
