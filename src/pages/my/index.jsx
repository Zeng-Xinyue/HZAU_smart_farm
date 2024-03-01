import './my.scss'
import { useState } from 'react';
import {  Col,Image, Modal , Row,Typography,Divider,Button,Menu,Drawer } from 'antd'
import { MailOutlined,AppstoreOutlined,PlusOutlined } from '@ant-design/icons';
import Userinfo from './components/userinfo'
const { Title,Text,Paragraph } = Typography;


function My () {
  const [ellipsis] = useState(true);
  const tips=["徽章1","徽章2","徽章3"];
  const tipsList = tips.map((tip, index)=>
    <Text type="success" key={index}>
      {tip}<Divider type="vertical"/>
    </Text>
  );
  const [maininfo, setMainInfo] = useState((
    <div className='M-maininfo'>
    <Title level={4}>1</Title>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    </div>));

  const onClick = (e) => {
    console.log('click ', e);
    setMainInfo(<div className='M-maininfo'>
    <Title level={4}>{e.key}</Title>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    </div>);
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('我的消息', 'sub1', <MailOutlined />, [
      getItem('收到', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      getItem('发出', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('我的足迹', 'sub2', <AppstoreOutlined />, [
      getItem('浏览记录', '5'),
      getItem('我的收藏', '6'),
      getItem('预留字段', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ])]


//修改个人资料
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  //注销账户
  const [modalopen, setmodalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('账户注销后无法恢复，确认注销？');
  const showModal = () => {
    setmodalOpen(true);
    setModalText('账户注销后无法恢复，确认注销？');
  };
  const handleOk = () => {
    setModalText('账户注销中，将在两秒内跳转登录页');
    setConfirmLoading(true);
    setTimeout(() => {
      setmodalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setmodalOpen(false);
  };

  //退出登录
  const [logmodalopen, setlogmodalOpen] = useState(false);
  const [logconfirmLoading, setlogConfirmLoading] = useState(false);
  const [logmodalText, setlogModalText] = useState('确认退出登录？');
  const showlogModal = () => {
    setlogmodalOpen(true);
    setlogModalText('确认退出登录？');
  };
  const handlelogOk = () => {
    setlogModalText('将在两秒内跳转登录页');
    setlogConfirmLoading(true);
    setTimeout(() => {
      setlogmodalOpen(false);
      setlogConfirmLoading(false);
    }, 2000);
  };
  const handlelogCancel = () => {
    console.log('logClicked cancel button');
    setlogmodalOpen(false);
  };
  return (
    <div className='P-My'>
      <div className='M-My'>
        <div className='M-Mytop'>
        <Row className='M-Mytoprow'>
          <Col className="gutter-row" span={4}>
            <div className='avatar-div'>
              {/* <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} className='avatar' icon={<UserOutlined />} /> */}
              <Image
                className='avatar'
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              </div>
          </Col>
          <Col className="gutter-row" span={14}>
            <div className='M-usertips'>
              <div className='M-name'>
                <Title level={3}>用户名</Title>
                </div>
              <div className='M-tips'>
               {tipsList}
              </div>
              <div className='M-detail'><Text type="secondary"><Paragraph ellipsis={ellipsis}>个人简介564666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666</Paragraph></Text></div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='M-userSetting'>
              <Button  type="primary" onClick={showDrawer} icon={<PlusOutlined />} block>修改资料 </Button>
                <Drawer
                    title="修改个人资料"
                    width={720}
                    onClose={onClose}
                    open={open}
                    styles={{
                      body: {
                        paddingBottom: 80,
                      },
                    }}
                  >
                    <Userinfo />
                  </Drawer>
              <Button type="dashed" onClick={showModal} block danger>账户注销 </Button>
              <Modal
              title="注销账户"
              open={modalopen}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalText}</p>
            </Modal>
              <Button type="dashed" onClick={showlogModal} block>退出登录 </Button>
              <Modal
              title="退出登录"
              open={logmodalopen}
              onOk={handlelogOk}
              confirmLoading={logconfirmLoading}
              onCancel={handlelogCancel}
            >
              <p>{logmodalText}</p>
            </Modal>
            </div>
          </Col>
      </Row>
        </div>
        <div className='M-Mymain'>
          <div className='M-leftNav'>
            <Menu
            onClick={onClick}
            style={{
              width: "100%",
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
            />
          </div>
            {maininfo}
        </div>
      </div>

    </div>
  )
}
export default My
