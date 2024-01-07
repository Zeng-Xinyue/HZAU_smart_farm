import './index.scss'
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import { Steps } from 'antd';
import Footer from '@/components/footer/index.jsx';


function Register() {
    const [current, setCurrent] = useState(3);

    const setCurrentStep = (index) => {
        setCurrent(index)
    };
    console.log(typeof setCurrentStep)


    return (
        <>
            <div className='P-register'>
                <div className='P-register-main'>
                    <div className='P-register-main-top'>
                        <div className='P-register-main-welcome'>欢迎加入智慧农场网站（3小步轻松注册）</div>
                        <div className='P-register-main-process'>
                            <Steps
                                current={current}
                                className="site-navigation-steps"
                                items={[
                                    {
                                        status: 'wait',
                                        title: '选择会员类型',
                                    },
                                    {
                                        status: 'wait',
                                        title: '填写注册信息',
                                    },
                                    {
                                        status: 'wait',
                                        title: '注册成功',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}

export default Register;