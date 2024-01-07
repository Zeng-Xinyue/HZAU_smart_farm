import { message } from 'antd';

interface MessageProps {
  type: 'success' | 'info' | 'warning' | 'error';
  content: string;
  duration?: number;
}

const showMessage = ({ type, content, duration = 2 }: MessageProps) => {
  message[type](content, duration);
};

export default showMessage;