import './index.scss'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import showMessage from '@/components/message';
import { toLogin } from '@/api/login.js'
import { goto } from '@/api';

import { useEffect, useState } from 'react';
import JSEncrypt from 'jsencrypt';
import { getPublicKey } from '@/api/login';

function LoginUsername() {
    const [form] = Form.useForm();
    const [rememberChecked, setRememberChecked] = useState(false); // 控制 Checkbox 的选中状态
    // useEffect(() => {
    //     if (localStorage.getItem('remember') !== rememberChecked) {
    //         form.setFieldsValue({ 'remember': rememberChecked });
    //     }
    // }, [rememberChecked])

    useEffect(() => {
        if (localStorage.getItem('remember')) {
            form.setFieldsValue({
                username: localStorage.getItem('username'),
                password: localStorage.getItem('password'),
                role: localStorage.getItem('role'),
                remember: true,
            });
        }

    }, []);

    const onFinish = async (values) => {
        let enPassword;
        const encrypt = new JSEncrypt();
        await getPublicKey().then((res) => {
            const publicKey = res.msg;
            encrypt.setPublicKey(publicKey)
            enPassword = encrypt.encrypt(values.password)
        }).catch(err => console.log(err))

        toLogin({
            "role": values.role,
            "phone": values.username,
            "password": enPassword,
        }).then(res => {
            if (res.code === 200) {
                showMessage({ type: 'success', content: '登录成功！' });
                //保存token
                localStorage.setItem('tokenStorage', res.data.token)
                //判断 “记住密码”
                if (values.remember) {
                    setRememberChecked(true);
                    localStorage.setItem("username", values.username);
                    localStorage.setItem("password", values.password);
                    localStorage.setItem("remember", values.remember);
                    localStorage.setItem("role", values.role);
                }
                goto('/')
            } else {
                showMessage({ type: 'error', content: res.msg })
            }
        }).catch(err => {
            showMessage({ type: 'error', content: err })
        })
    };
    return (
        <div className='P-login-username'>
            <Form
                form={form}
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名或手机号码!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="form-item form-item-username" />} placeholder="用户名/手机号码" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入正确的密码!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="form-item form-item-password" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>

                <Form.Item name="role"
                    rules={[
                        {
                            required: true,
                            message: '请选择您的认证身份!',
                        },
                    ]}>
                    <Select
                        className="form-item"
                        style={{
                            height: '4vh',
                        }}
                        placeholder="认证身份"
                        options={[
                            {
                                value: '个人用户',
                                label: '个人用户',
                            },
                            {
                                value: '农场主',
                                label: '农场主',
                            },
                            {
                                value: '专家',
                                label: '专家',
                            },
                        ]}
                    />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <div>
                        <Checkbox onChange={(e) => setRememberChecked(e.target.checked)}>
                            记住密码
                        </Checkbox>
                        <a className="login-form-forgot">
                            忘记密码
                        </a>
                    </div>
                </Form.Item>

                <Form.Item>
                    <div>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        <Link className='P-login-immediately-signup' to={'/register'}>立即注册！</Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginUsername;