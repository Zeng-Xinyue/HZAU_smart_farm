import './mainSpan1.scss'
import { PhoneOutlined } from '@ant-design/icons'

function MainSpan1() {
    return (
        <div className='P-main-span1'>
            <div className='P-main-span1-main'>
                <div className='P-span1-left'></div>
                <div className='P-span1-swapper'></div>
                <div className='P-span1-right'></div>
                <div className='P-span1-bottom'>
                    <div className='P-span1-bottom-item'>
                        <div className='P-span1-bottom-item-name'>李林</div>
                        <div className='P-span1-bottom-item-tit'>农学专家</div>
                        <div className='P-span1-bottom-item-phone'><PhoneOutlined />1234567890</div>
                    </div>
                    <div className='P-span1-bottom-item'>
                        <div className='P-span1-bottom-item-name'>李伟夫</div>
                        <div className='P-span1-bottom-item-tit'>深度学习专家</div>
                        <div className='P-span1-bottom-item-phone'><PhoneOutlined />1234567890</div>
                    </div>
                    <div className='P-span1-bottom-item'>
                        <div className='P-span1-bottom-item-name'>XX</div>
                        <div className='P-span1-bottom-item-tit'>XXXXX</div>
                        <div className='P-span1-bottom-item-phone'><PhoneOutlined />1234567890</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSpan1;