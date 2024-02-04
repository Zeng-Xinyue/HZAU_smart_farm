import './userinfo.scss'
import ImgCrop from 'antd-img-crop';
import { useState } from 'react';
import { Radio, Form, Input,Avatar ,Button,Space,Upload} from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
// const [avatar, setFileList] = useState(
//   {
//     uid: '-1',
//     name: 'image.png',
//     status: 'done',
//     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//   },
// );
// const onavatarChange = ({ fileList: newFile}) => {
//   setFileList(newFile);
// };
// const onavatarPreview = async (file) => {
//   let src = file.url;
//   if (!src) {
//     src = await new Promise((resolve) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file.originFileObj);
//       reader.onload = () => resolve(reader.result);
//     });
//   }
//   const image = new Image();
//   image.src = src;
//   const imgWindow = window.open(src);
//   imgWindow?.document.write(image.outerHTML);
// };
  return (

    <div className='M-userInfo'>
    <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item  name={['user', 'avatar']}
            label="头像"
            >
               {/* <ImgCrop rotationSlider>
                  <Upload
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture-card"
                    fileList={avatar}
                    onChange={onavatarChange}
                    onPreview={onavatarPreview}
                  >+ Add image
                  </Upload>
                </ImgCrop> */}
          <Avatar size={100} icon={<UserOutlined />} />
          </Form.Item>
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
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name={['user', 'sex']} label="性别"
           rules={[
            {
              required: true,
            },
          ]}>
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
