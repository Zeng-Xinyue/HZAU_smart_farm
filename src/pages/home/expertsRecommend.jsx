import './expertsRecommend.scss'
import lilinAvator from '@/common/image/Lilin.png'
import liweifuAvator from '@/common/image/Liweifu.png'
import { PhoneOutlined,MessageOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

function ExpertsRecommend() {
    const expertsList = [
        {
            name: '李林',
            info: '构建了玉米第一代生物网络大数据图谱并开发了人工智能挖掘工具，系统解析了玉米株型建成分子基础，对玉米株型、产量、开花期等分子网络进行了系统鉴定，开发作物精准智能设计育种体系CropGPT，为智能设计育种打下了基础',
            phone: '111111',
            avator: lilinAvator,
            place: '湖北-武汉'
        },
        {
            name: '李伟夫',
            info: '主要研究方向为深度学习的理论及其在生命科学和材料科学领域的应用',
            phone: '',
            avator: liweifuAvator,
            place: '湖北-武汉'
        },
        {
            name: '',
            info: '马铃薯专家',
            phone: '',
            avator: '',
            place: '湖北-武汉'
        },
        {
            name: '',
            info: '',
            phone: '',
            avator: '',
            place: '湖北-武汉'
        },
    ]
    return (
        <div className='P-experts-recommend'>
            <div className='P-experts-recommend-main'>
                <div className='P-experts-recommend-tit'>华中农专家推荐</div>
                <div className='P-experts-recommend-list'>
                    {
                        expertsList.map((item, index) => {
                            return (
                                <div key={index} className='P-experts-recommend-item'>
                                    <div className='P-experts-recommend-item-avator'>
                                        <img className='P-experts-recommend-item-avator-img' src={item.avator} />
                                    </div>
                                    <div className='P-experts-recommend-item-info'>
                                        <div className='P-experts-recommend-item-name'>{item.name}</div>
                                        <div className='P-experts-recommend-item-place'>{item.place}</div>
                                        <div className='P-experts-recommend-item-phone'><PhoneOutlined></PhoneOutlined> - {item.phone}</div>
                                        <div className='P-experts-recommend-item-info-tit'>{item.info}</div>
                                        <div className='P-experts-recommend-item-btn'>
                                            <Link to={'/quick_consultation'}>
                                                <Button><MessageOutlined />快速咨询</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}
export default ExpertsRecommend;