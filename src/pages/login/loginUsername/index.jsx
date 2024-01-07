import './index.scss'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Form, Input,Select } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import showMessage from '@/components/message';
import { farmerLogin } from '@/api/login.js'
import { goto } from '@/api';
function LoginUsername() {

    const onFinish = (values) => {
        console.log(values)
        farmerLogin({
            "role": values.role,
            "phone": values.username,
            "password": values.password
        }).then(res => {
            if (res.code === 200) {
                showMessage({ type: 'success', content: '登录成功！' });
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
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: false,
                }}
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

                <Form.Item name="role">
                    <Select
                        
                        defaultValue=""
                        className="form-item"
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
                            // {
                            //     value: 'disabled',
                            //     label: 'Disabled',
                            //     disabled: true,
                            // },
                        ]}
                    />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住密码</Checkbox>
                    <a className="login-form-forgot" href="">
                        忘记密码
                    </a>
                </Form.Item>



                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    <Link className='P-login-immediately-signup' to={'/register'}>立即注册！</Link>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginUsername;