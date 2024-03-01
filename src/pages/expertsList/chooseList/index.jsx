import { useState } from 'react';
import List from './list.jsx';
import Sort from './sort.jsx';
import './index.scss'

const ChooseList = () => {
    return (
        <div className='P-chooseList'>
            <div className='P-chooseList-main'>
                <List></List>
                <Sort></Sort>
            </div>

        </div >
    )
};
export default ChooseList;
