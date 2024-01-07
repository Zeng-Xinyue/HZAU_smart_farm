import './chatWindow.scss'
import { useState } from 'react';
import { Input, Button } from 'antd';
const { TextArea } = Input;
import defaultImg from '@/common/image/default.jpg'

function ChatWindow() {
    const [value, setValue] = useState('');

    return (
        <div className='P-chat-window'>
            <div className='P-chat-window-constent'>

                {/* constructor(props) {
    super(props);
    this.state = {
      htmlContent: '<h1>Hello, <em>World</em>!</h1>' // 用户从 textarea 获取的包含 HTML 代码的内容
    };
  }

  render() {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: this.state.htmlContent }}
      ></div>
    );
  } */}
                <div className='P-experts-anwser-item'>
                    <img src={defaultImg} />
                    <div className='P-anwser-message'>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</div>
                </div>
                <div className='P-experts-anwser-item'>
                    <img src={defaultImg} />
                    <div className='P-anwser-message'>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</div>
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
                <Button type="primary">发送</Button>
            </div>
        </div>
    )
}

export default ChatWindow;