import './chatWindow.scss'
import { useState } from 'react';
import { Input, Button } from 'antd';
const { TextArea } = Input;
import defaultImg from '@/common/image/default.jpg'
import QuickLogin from '@/components/quickLogin/index.jsx';

function ChatWindow() {
  const [value, setValue] = useState('');
  const [isOpenQuickLogin, setOpenQuickLogin] = useState(false);
  const handleSendMessage = () => {
    setOpenQuickLogin(true)
  }

  return (
    <div className='P-chat-window'>
      <QuickLogin isOpenQuickLogin={isOpenQuickLogin} setOpenQuickLogin={setOpenQuickLogin}/>
      <div className='P-chat-window-constent'>
        <div className='P-experts-anwser-item'>
          <img src={defaultImg} />
          <div className='P-anwser-message'>欢迎使用华中农智慧农业网站。平台共有专业农学专家！继续使用默认您同意<a>《用户服务协议》</a>、<a>《隐私政策》</a>、<a>《咨询产品服务协议》</a>。请简单说明您的问题，便于专家提前了解。</div>
        </div>
        <div className='P-experts-anwser-item'>
          <img src={defaultImg} />
          <div className='P-anwser-message'>您好，请问您要咨询什么问题？</div>
        </div>

      </div>
      <div className='P-chat-window-textarea'>
        <div className='P-chat-window-text-nav'>
        </div>
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={500}
          placeholder="请简单描述您的问题（6-500字）" bordered={false}
          className='P-text-area-input'
        />
        <Button type="primary" onClick={handleSendMessage}>发送</Button>
      </div>
    </div>
  )
}

export default ChatWindow;