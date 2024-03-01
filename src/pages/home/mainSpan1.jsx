import './mainSpan1.scss'
import { PhoneOutlined, MessageOutlined, CheckCircleOutlined, EnvironmentOutlined, SearchOutlined } from '@ant-design/icons'
import {
    Button,
    Cascader,
    Form,
    Select,
} from 'antd';
import { Link } from 'react-router-dom';
import cityOptions from '@/utils/cityOptions.js'
import { useEffect } from 'react';

import fenghuaImg from '@/common/image/Fenghua.png'

function MainSpan1() {
    const onChange = (value) => {
        console.log(value);
    };

    const questionCategory = [
        {
            value: '种',
            label: '种',
        },
        {
            value: '药',
            label: '药',
        },
        {
            value: '械',
            label: '械',
        },
        {
            value: '肥',
            label: '肥',
        },
    ]
    const serveCategory = [
        {
            value: '专家咨询',
            label: '专家咨询'
        },
        {
            value: '热门问题',
            label: '热门问题'
        },
    ]
    const onFinish = async (values) => {
        console.log(values)
    };

    // useEffect(() => {
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(
        //         (position) => {
        //             // 获取位置成功
        //             const { latitude, longitude } = position.coords;

        //             // 使用经纬度获取城市信息（这部分可能需要使用地图服务API）
        //             // 例如使用第三方服务如高德地图、百度地图API进行逆地理编码获取城市信息

        //             // 示例：使用高德地图API
        //             const apiUrl = `https://restapi.amap.com/v3/geocode/regeo?key=YOUR_AMAP_API_KEY&location=${longitude},${latitude}`;

        //             fetch(apiUrl)
        //                 .then(response => response.json())
        //                 .then(data => {
        //                     const city = data.regeocode.addressComponent.city;
        //                     console.log('当前城市:', city);
        //                 })
        //                 .catch(error => console.error('获取城市信息失败:', error));
        //         },
        //         (error) => {
        //             // 获取位置失败
        //             console.error('无法获取当前位置:', error.message);
        //         }
        //     );
        // } else {
        //     console.error('浏览器不支持Geolocation API');
        // }
    // }, [])

    return (
        <div className='P-main-span1'>
            <div className='P-main-span1-main'>
                <div className='P-span1-left'>
                    <Form
                        layout="horizontal"
                        className='form'
                        name="quickSearch"
                        onFinish={onFinish}
                        initialValues={{
                            'position': ['湖北省', '武汉市', '洪山区']
                        }}
                    >
                        <Form.Item name="position" rules={[{ required: true, message: '请选择地区' }]}>
                            <Cascader /* onChange={onChange} */
                                className='form-item'
                                options={cityOptions}
                                placeholder="请选择所在地区" />
                        </Form.Item>

                        <Form.Item name="question" rules={[{ required: true, message: '请选择问题的类型' }]}>
                            <Select className='form-item' placeholder="问题类型" options={questionCategory} />
                        </Form.Item>

                        <Form.Item name="sserve" rules={[{ required: true, message: '请选择期望得到的服务' }]}>
                            <Select className='form-item' placeholder="期望服务" options={serveCategory} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className='form-item'><SearchOutlined />快速查找</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className='P-span1-swapper'></div>
                <div className='P-span1-right'>
                    <div className='P-span1-right-top'>
                        <span className='P-span1-right-top-tit'>1分钟提问，快速得到解答</span>
                        <div className='P-span1-right-top-btn'>
                            <Link to={'/quick_consultation'}>
                                <Button type='primary'><MessageOutlined />在线咨询</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='P-span1-right-bottom'>
                        <div className='P-span1-right-bottom-text'>严格认证 · 放心查询</div>
                        <div className='P-span1-right-bottom-inco'>
                            <div className='P-span1-right-bottom-inco-item'>
                                <CheckCircleOutlined />
                                <span>专业认证</span>
                            </div>
                            <div className='P-span1-right-bottom-inco-item'>
                                <CheckCircleOutlined />
                                <span>专家认证</span>
                            </div>
                            <div className='P-span1-right-bottom-inco-item'>
                                <CheckCircleOutlined />
                                <span>行业认证</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='P-span1-bottom'>
                    <img className='P-span1-bottom-left' src={fenghuaImg} />
                    <div className='P-span1-bottom-right-tit'>示范农场: <Link style={{fontSize:'2.8vh'}} >丰华现代农业开发有限公司</Link></div>
                    <div className='P-span1-bottom-right-text'>2008年起至今连年被授于武汉市农业产业化重点龙头企业，全国绿色食品（疏菜）基地试验区、全国芦笋种植基地示范区、首批“创业天使导师团”成员、湖北省休闲旅游示范点、湖北省五星级农家乐、 2016年中部休闲农业与乡村旅游发展论坛组委会评选 湖北省“十佳示范农庄”，是华中农业大学实验基地、湖北工业大学教学基地，武汉农村商业银行重点扶持单位。2022年丰华公司将打造武汉市最佳沉浸式体验生态农业园。</div>
                </div>
            </div>
        </div>
    )
}

export default MainSpan1;