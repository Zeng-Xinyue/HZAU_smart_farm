import './list.scss'
import { getExpertList } from '@/api/experts.js'
import { useState, useEffect } from 'react'

export default function List() {
    const [expertsList, setExpertList] = useState([])
    useEffect(() => {
        getExpertList().then(res => {
            setExpertList(res.data)
        })
    }, [])
    return (
        <div className="P-list">
            {
                expertsList.map(item => {
                    return (
                        <div className="P-list-item" key={item.name}>
                            <div className="P-list-item-name"><a href={item.link} target="_blank">{item.name}</a></div>
                        </div>
                    )
                })
            }
        </div>
    )
}