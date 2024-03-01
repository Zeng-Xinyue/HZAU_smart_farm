import { Button } from 'antd';
import { useNavigate} from 'react-router-dom'
import userImg from '@/common/image/user.png'
import expertImg from '@/common/image/expert.png'
import defaultImg from '@/common/image/default.jpg'
import './step1.scss'

function Step1(props) {
    const navigate = useNavigate();
    const identityList = [
        {
            name: '个人用户',
            img: userImg,
            introText: '11111111',
            btnText:'成为用户'
        },
        {
            name: '农场主',
            img: defaultImg,
            introText: '222222222',
            btnText:'农场主认证'
        },
        {
            name: '专家',
            img: expertImg,
            introText: '333333333',
            btnText:'专家认证'
        },
        {
            name: '公司',
            img: defaultImg,
            introText: '农服...',
            btnText:'公司账号认证'
        }
    ];
    //处理按钮点击事件
    const handleBtnClick = () => {
        navigate('/register/step2/peruser')
    };

    return (
        <div className="P-step1">
            <div className='P-identity-list'>
                {
                    identityList.map((option, index) => (
                        <div key={index} className='P-identity-item'>
                            <img key={option.img} src={option.img} className='P-identity-item-img'></img>
                            <div className='P-identity-item-tit'>{option.name}</div>
                            <div key={option.introText} className='P-identity-item-intro'>{option.introText}</div>
                            <Button onClick={handleBtnClick} type="primary" key={option.btnText} className='P-identity-item-btn'>{option.btnText}</Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Step1;