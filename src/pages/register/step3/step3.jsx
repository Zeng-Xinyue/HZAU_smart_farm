import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import './step3.scss'

function Step3() {
    return (
        <div className="P-step3">
            <Result
                status="success"
                title="恭喜您注册成功"
                subTitle="您的用户名是：111111"
                extra={[
                    <Button className='P-tologin'>
                        <Link to={'/login'}>去登录</Link>
                    </Button>,
                    <Button><Link to={'/'}>回到首页</Link></Button>,
                ]}
            />
        </div>
    )
}

export default Step3;