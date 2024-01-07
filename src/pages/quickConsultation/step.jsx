import { useState } from 'react';
import { Steps } from 'antd';
import './step.scss'

const Step = () => {
  const [current, setCurrent] = useState(3);
  return (
    <>
      <Steps
        current={current}
        className="site-navigation-steps"
        items={[
          {
            status: 'wait',
            title: '填写问题',
          },
          {
            status: 'wait',
            title: '等待专家回复',
          },
          {
            status: 'wait',
            title: '查看专家解答',
          },
          {
            status: 'wait',
            title: '留下反馈',
          },
        ]}
      />
    </>
  );
};
export default Step;