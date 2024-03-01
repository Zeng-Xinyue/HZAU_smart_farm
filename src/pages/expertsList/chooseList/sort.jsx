import './sort.scss'
import { useState, useEffect } from 'react'

export default function Sort() {
    const sortList1 = [
        {
            value: '全部',
            id: 0
        },
        {
            value: '种',
            id: 1
        },
        {
            value: '药',
            id: 2
        },
        {
            value: '械',
            id: 3
        },
        {
            value: '肥',
            id: 4
        },
    ]
    const [activedId, setActivedId] = useState(0);
    useEffect(() => {

    }, [activedId])

    const handleItemClick = function (clickedItemId) {
        setActivedId(clickedItemId);
    }


    return (
        <div className="P-sort">
            <div className="P-sort-tit">筛选</div>
            <div className="P-sort-List1">
                <span className="P-sort-List1-tit">类型：</span>
                {
                    sortList1.map(item => {
                        return (
                            <div key={item.id} className={`P-sort-List1-item ${item.id === activedId ? 'actived' : ''}`}
                                onClick={() =>handleItemClick(item.id)}>{item.value}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}