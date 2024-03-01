import './userinfo.scss'
import { useState } from 'react';
import { Radio, Form, Input,Button,Space} from 'antd';
import AvatarCompnent from './avatar'
function Userinfo() {
  //表单
  const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const validateMessages = {
    required: '${label} 必需!',
    types: {
      email: '${label} 格式不正确!',
      number: '${label} 格式不正确!',
    },

  };
  const onFinish = (values) => {
    form.setFieldsValue({
      user: {
        avatar: avatarValue,
        name: values.user.name,
        email: values.user.email,
        sex:value,
      },
    });
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
//性别
  const [value, setvalue] = useState(1);
  console.log(value)
  const sexChange = (e) => {
  console.log('radio checked', e.target.value);
  setvalue(e.target.value);
  };
//头像
const [avatarValue, setAvatarValue] = useState("https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png");
  return (

    <div className='M-userInfo'>
    <Form
          {...layout}
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'avatar']}
            label="头像">
              <AvatarCompnent value={avatarValue} onAvatarChange={setAvatarValue}/></Form.Item>
          <Form.Item
            name={['user', 'name']}
            label="用户名"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="邮箱"
            rules={[
              {
                type: 'email',
              },
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name={['user', 'sex']} label="性别"
          >
            <Radio.Group onChange={sexChange} value={value} defaultValue={1}>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name={['user', 'introduction']} label="用户介绍">
            <Input.TextArea />
          </Form.Item>

          <Form.Item { ...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
          </Space>
          </Form.Item>
        </Form>
  </div>
  )
}
export default Userinfo
