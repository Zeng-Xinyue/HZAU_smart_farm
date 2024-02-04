import './step2PerUser.scss'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, PhoneOutlined } from '@ant-design/icons';
import bg from '@/common/image/chatrobot.png'
import { goto } from '@/api';
import showMessage from '@/components/message'
import { toRegisteUser } from '@/api/register.js'
import JSEncrypt from 'jsencrypt';
import { getPublicKey } from '@/api/login';

function Step2PerUser() {
    const onFinish = async (values) => {
        let enPassword;
        const encrypt = new JSEncrypt();
        await getPublicKey().then((res) => {
            const publicKey = res.msg;
            encrypt.setPublicKey(publicKey)
            enPassword = encrypt.encrypt(values.password)
        }).catch(err => console.log(err))

        toRegisteUser({
            "role": "农场主",
            "phone": values.username,
            "password": enPassword
        })
            .then(res => {
                if (res.code === 200) {
                    goto('/register/step3');

                } else {
                    showMessage({ type: 'warning', content: res.msg })
                }
            })
            .catch(err => console.log(err))
    };
    return (
        <div className="P-step2-peruser">
            <div className='P-step2-bg'>
                <img src={bg} alt="" />
            </div>

            <Form
                name="registration"
                className="register-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入手机号码',
                        },
                        {
                            pattern: /^1[3456789]\d{9}$/,
                            message: '请输入正确的手机号码!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input prefix={<PhoneOutlined className="form-item form-item-phone" />} placeholder="手机号码" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        prefix={<LockOutlined className="form-item form-item-password" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: '请确认密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('两次输入的密码不一致!'));
                            },
                        }),
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        prefix={<LockOutlined className="form-item form-item-password" />}
                        type="password"
                        placeholder="确认密码"
                    />
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
                    <Button type="primary" htmlType="submit" className="register-form-button">
                        注册
                    </Button>
                    <div className='P-register-immediately-login'>我已经注册，现在立即
                        <Link to={'/login'}> 登录</Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Step2PerUser;