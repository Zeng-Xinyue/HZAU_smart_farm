import { Spin } from 'antd';
import { useState,useEffect } from 'react';
const Loading = (props) => {
  const [spinning, setSpinning] = useState(false);
  console.log(props)
  useEffect(() => {
    setSpinning(props.show);
    // setTimeout(() => {
    //   setSpinning(false)
    // },3000)
  },[props.show])
  
  return (
    <>
      <Spin spinning={spinning} fullscreen />
    </>
  );
};
export default Loading;