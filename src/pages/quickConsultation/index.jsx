import './index.scss'
import Step from './step';
import ChatWindow from './chatWindow';
import { useState } from 'react';

function QuickConsultation() {
    // const [messages, setMessages] = useState([]);
    // const [newMessage, setNewMessage] = useState('');

    // const handleInputChange = (event) => {
    //     setNewMessage(event.target.value);
    // };

    // const handleSendMessage = () => {
    //     if (newMessage.trim() !== '') {
    //         setMessages([...messages, newMessage]);
    //         setNewMessage('');
    //     }
    // };
    {/* <div className="message-container">
                        {messages.map((message, index) => (
                            <div key={index} className="message">
                                {message}
                            </div>
                        ))}
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={handleInputChange}
                            placeholder="输入消息..."
                        />
                        <button onClick={handleSendMessage}>发送</button>
                    </div> */}

    return (
        <div className='P-quick-consultation'>
            <div className='P-quick-consultation-main'>
                <div className='P-quick-consultation-chat'>
                    <div className='P-quickconsultation-chattit'>专家在线咨询</div>
                    <ChatWindow></ChatWindow>
                </div>
                <div className='P-quick-consultation-process'>
                    <Step></Step>
                </div>
            </div>
        </div>
    )
}

export default QuickConsultation;