import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import chatrobot from '@/common/image/chatrobot.png'
import phonerobot from '@/common/image/phonerobot.png'
import salesrobot from '@/common/image/salesrobot.png'
import planrobot from '@/common/image/planrobot.png'
import './index.scss'

function Login() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleUsernameChange = (e) => {
    //     setUsername(e.target.value);
    // };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // 在此处添加登录逻辑
    //     console.log('Username:', username);
    //     console.log('Password:', password);
    // };
    const [loginTypeIndex, setLoginTypeIndex] = useState(0);

    useEffect(() => {
        const currentPath = window.location.hash.replace(/#/, "");;
        console.log(currentPath)
        if (currentPath === '/login/username') {
            setLoginTypeIndex(0)
        } else if (currentPath === '/login/checkphone') {
            setLoginTypeIndex(1)
        }
    })

    const handleChangeType = (index) => {
        setLoginTypeIndex(index)
    }

    return (
        <div className='P-login'>
            <div className="background-image" />
            <div className='P-login-containter'>
                <Link to={'/home'} className='P-login-cancel'>
                    <CloseOutlined />
                </Link>

                <div className='P-login-left'>
                    <Carousel autoplay className='P-login-left-intro'>
                        <div>
                            <img className="P-login-left-img" src={chatrobot} />
                        </div>
                        <div>
                            <img className="P-login-left-img" src={phonerobot} />
                        </div>
                        <div>
                            <img className="P-login-left-img" src={salesrobot} />
                        </div>
                        <div>
                            <img className="P-login-left-img" src={planrobot} />
                        </div>  
                    </Carousel>
                </div>

                <div className='P-login-right'>
                    <div className='P-login-form'>
                        <div className='P-login-form-tit'>
                            <div className={`'P-login-form-tit1' ${!loginTypeIndex ? 'active' : ''}`}>
                                <Link onClick={() => handleChangeType(0)} to={'username'}>用户名登录</Link>
                            </div>
                            <div className={`'P-login-form-tit2' ${loginTypeIndex ? 'active' : ''}`}>
                                <Link onClick={() => handleChangeType(1)} to={'checkphone'}>验证码登录</Link>
                            </div>
                        </div>

                        <div className='P-login-form-type'>
                            <Outlet></Outlet>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;