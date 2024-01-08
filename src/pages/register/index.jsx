import './index.scss'
import { useEffect, useState } from 'react';
import { Outlet,useLocation } from 'react-router-dom'
import { Steps } from 'antd';
import Footer from '@/components/footer/index.jsx';


function Register() {
    const [current, setCurrent] = useState(0);
    const steps = [
        {
            status: 'wait',
            title: '选择会员类型',
            key: 'step1',
        },
        {
            status: 'wait',
            title: '填写注册信息',
            key: 'step2',
        },
        {
            status: 'wait',
            title: '注册成功',
            key: 'step3',
        },
    ];
    const items = steps.map((item) => ({key:item.key,title:item.title/* ,status:item.status */}));
    const location = useLocation();
    useEffect(() => {
        const path = location.pathname;
        console.log(path)
        switch(path){
            case '/register/step1':
                setCurrent(0);
                break;
            case '/register/step2/peruser':
                setCurrent(1);
                break;
            case '/register/step3':
                setCurrent(2);
                break;
            default:
                setCurrent(0);
                break;
        }
    },[location.pathname])


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
                                items={items}
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