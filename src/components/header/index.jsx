import './header.scss'
import { Link,NavLink } from 'react-router-dom'
import {Button} from 'antd'
import {MessageOutlined} from '@ant-design/icons';

function Header() {
    const navTopLeftOptions = [
        { name: '首页', link: '/' },
        { name: '专家咨询', link: '/' },
        { name: '找专家', link: '/' },
        { name: '知识科普', link: '/' }
    ];
    const navTopRightOptions = [
        { name: '免费注册', link: '/register' },
        { name: '登录', link: '/login' },
    ];
    const navBottomOptions = [
        { name: '首页', link: '/' },
        { name: '专家咨询', link: '/' },
        { name: '找专家', link: '/' },
        { name: '找问题', link: '/' },
        { name: '商城', link: '/' },
    ];

    return (
        <div className="M-header">
            <div className='M-header-top'>
                <div className='M-header-top-main'>
                    <div className="M-header-top-left">
                        {
                            navTopLeftOptions.map((option, index) => (
                                <div key={index} className="M-header-top-left-item">
                                    <Link to={option.link}>{option.name}</Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="M-header-top-right">
                        {
                            navTopRightOptions.map((option, index) => (
                                <div key={index} className="M-header-top-right-item">
                                    <Link to={option.link}>{option.name}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='M-header-bottom'>
                <div className='M-header-bottom-main'>
                    <div className='M-header-bottom-main-item'>
                        <Link to={'/'}>
                            <img className='M-header-logo' src="" alt="logo" />
                        </Link>
                    </div>
                    {
                        navBottomOptions.map((option, index) => (
                            <div key={index} className='M-header-bottom-main-item'>
                                <Link to={option.link}>{option.name}</Link>
                            </div>
                        ))
                    }
                    <div className='M-header-bottom-main-item'>
                        <NavLink to={'/quick_consultation'}>
                            <Button><MessageOutlined />快速咨询</Button>
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;