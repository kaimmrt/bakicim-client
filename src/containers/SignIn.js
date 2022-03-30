import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { userSignIn } from "../appRedux/actions";

const Signin = (props) => {
    const dispatch = useDispatch();
    const authUser = useSelector(({ auth }) => auth.authUser);

    const onFinishFailed = errorInfo => {

    };

    const onFinish = values => {
        dispatch(userSignIn(values));
    };

    useEffect(() => {
        if (authUser !== null) {
            props.history.push('/');
        }
    }, [authUser]);

    return (
        <div className="auth-container">
            <div className="auth-left-container-signin">
            </div>
            <div className="auth-form">
                <h1 className="auth-header">Giriş Yap</h1>
                <Form
                    initialValues={{ remember: true }}
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="gx-signin-form gx-form-row0">

                    <Form.Item
                        rules={[{ required: true, message: 'Please enter a valid e-mail address!' }]} name="email">
                        <Input placeholder="Email" className="auth-input" />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true, message: 'Please enter your password!' }]} name="password">
                        <Input type="password" placeholder="Password" className="auth-input" />
                    </Form.Item>


                    <Form.Item>
                        <Button type="primary" className="auth-btn-typ-1" htmlType="submit">
                            Sign in
                        </Button>
                        <span>or</span> <Link className="auth-btn-typ-2" to="/signup">Sign Up</Link>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}

export default Signin
