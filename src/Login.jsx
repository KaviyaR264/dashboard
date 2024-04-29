import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import './Login.css'; 

const App = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await fetch("http://134.209.145.90:8000/api/user/login/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
        
            if (!response.ok) {
              throw new Error("Authentication failed");
            }
        
            const data = await response.json();
            Cookies.set('jwt', data);
            navigate("/reports");
          } catch (error) {
            console.error('Error during login:', error.message);
            toast.error('Incorrect username or password');

          }
}

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            {/* <Checkbox>Remember me</Checkbox> */}
                        </Form.Item>

                        {error && <p className="error-message">{error}</p>}

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Log In
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <footer className="login-footer">
    <p>@ <a href="https://pinesphere.com/">Pinesphere</a>. All rights reserved.</p>
</footer>

            <ToastContainer />
        </>
    );
};

export default App;
