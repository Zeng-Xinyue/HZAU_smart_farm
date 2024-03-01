import './chatWindow.scss'
import { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
const { TextArea } = Input;
import defaultImg from '@/common/image/default.jpg'
import QuickLogin from '@/components/quickLogin/index.jsx';
import showMessage from '@/components/message';

function ChatWindow() {
  const [isOpenQuickLogin, setOpenQuickLogin] = useState(false);
  const [message, setMessage] = useState('');

  const [websocket, setWebsocket] = useState(null);
  const [userId, setUserId] = useState("xiaoyou001");
  const [messageInput, setMessageInput] = useState("");
  const [sendUserIdInput, setSendUserIdInput] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState(["欢迎使用华中农智慧农业网站。平台共有专业农学专家！继续使用默认您同意《用户服务协议》、《隐私政策》、《咨询产品服务协议》。请简单说明您的问题，便于专家提前了解。",
    "您好，请问您要咨询什么问题？",]);

  const handleSendMessage = () => {
    // setOpenQuickLogin(true)
    if(!message.trim()){
      showMessage({type:'warning',content:"输入不能为空"});
      return;
    }
    setSendUserIdInput([...sendUserIdInput, message])
    websocket.send(message + ',1');
    setMessage('')
  }
  useEffect(() => {
    const ws = new WebSocket('ws://124.221.104.7:12006/websocket/' + userId);
    setWebsocket(ws);

    ws.onerror = function () {
      console.log("WebSocket连接发生错误");
    };

    ws.onopen = function () {
      console.log("WebSocket连接成功");
    };

    ws.onmessage = function (event) {
      console.log(event.data);
    };

    ws.onclose = function () {
      console.log("WebSocket连接关闭");
    };

    return () => {
      closeWebSocket();
    };
  }, [userId]);

  const closeWebSocket = () => {
    if (websocket) {
      websocket.close();
    }
  };


  return (
    <div className='P-chat-window'>
      <QuickLogin isOpenQuickLogin={isOpenQuickLogin} setOpenQuickLogin={setOpenQuickLogin} />
      <div className='P-chat-window-constent'>
        {
          receivedMessages.map((item, index) => {
            return (
              <div key={index} className='P-experts-anwser-item'>
                <img src={defaultImg} />
                <div className='P-anwser-message'>{item}</div>
              </div>
            )
          })
        }

        {sendUserIdInput.map((item, index) => {
          return (
            <div key={index} className='P-user-sent-item'>
              <img src={defaultImg} />
              <div className='P-sent-message'>{item}</div>
            </div>
          );
        })}
      </div>

      <div className='P-chat-window-textarea'>
        <div className='P-chat-window-text-nav'>
        </div>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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