import './index.scss'
// import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { PhoneOutlined, MessageOutlined } from '@ant-design/icons';
import showMessage from '@/components/message';

function LoginCheckPhone() {
    const [form] = Form.useForm();

    const handleChecknum = () => {
        const formData = form.getFieldsValue();
        if (!formData.phone) {
            showMessage({type:'warning',content:"手机号不能为空"})
        } else {

        }
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className='P-login-checkphone'>
            <Form
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: '请输入电话号码!',
                        },
                        {
                            pattern: /^1[3456789]\d{9}$/,
                            message: '请输入正确的手机号码!',
                        },
                    ]}
                >
                    <Input prefix={<PhoneOutlined className="form-item form-item-phone" />} placeholder="电话号码" />
                </Form.Item>

                <Form.Item
                    name="checknum"
                    rules={[
                        {
                            required: true,
                            message: '请输入短信验证码!',
                        },
                    ]}
                    className="form-item-checknum"
                >
                    <Space.Compact
                        style={{
                            width: '100%',
                        }}
                    >
                        <Input prefix={<MessageOutlined />} className='P-checknum-input' placeholder='请输入短信验证码' />
                        <Button onClick={handleChecknum} className='P-checknum-btn'>获取验证码</Button>
                    </Space.Compact>
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('请同意协议')),
                        },
                    ]}
                >
                    <Checkbox>
                        我已阅读并同意 <a>《用户服务协议》</a>、<a>《隐私政策》</a>
                    </Checkbox>
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

export default LoginCheckPhone;