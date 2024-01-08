import './expertsRecommend.scss'
import lilinAvator from '@/common/image/Lilin.png'
import liweifuAvator from '@/common/image/Liweifu.png'
import chenhongAvator from '@/common/image/Chenhong.png'
import denghaoAvator from '@/common/image/Denghao.png'
import { PhoneOutlined,MessageOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

function ExpertsRecommend() {
    const expertsList = [
        {
            name: '李林',
            info: '构建了玉米第一代生物网络大数据图谱并开发了人工智能挖掘工具，系统解析了玉米株型建成分子基础，对玉米株型、产量、开花期等分子网络进行了系统鉴定，开发作物精准智能设计育种体系CropGPT，为智能设计育种打下了基础',
            phone: '1123455555',
            avator: lilinAvator,
            place: '湖北-武汉'
        },
        {
            name: '李伟夫',
            info: '主要研究方向为深度学习的理论及其在生命科学和材料科学领域的应用。近三年主持国家自然科学基金和国家重点研发计划子课题等国家级课题4项，校自主创新基金1项，横向课题若干项，并作为骨干成员参与教育部优秀青年团队培育项目，累计经费约400万元。',
            phone: '15972007638',
            avator: liweifuAvator,
            place: '湖北-武汉'
        },
        {
            name: '陈洪',
            info: '研究方向为机器学习、统计学习理论。湖北省优秀博士论文获得者，入选华中农业大学十大青年岗位能手、硕彦计划青年拔尖人才。主持国家自然科学基金面上项目、青年基金等5项国家级课题',
            phone: '14435654674',
            avator: chenhongAvator,
            place: '湖北-武汉'
        },
        {
            name: '邓昊',
            info: '研究方向为机器学习/时间序列分析；近五年主持湖北省自然科学基金/省级开放基金/中央高校基本业务专项基金/横向项目多项，以第一/通讯作者发表SCI论文10余篇。',
            phone: '14342534553',
            avator: denghaoAvator,
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