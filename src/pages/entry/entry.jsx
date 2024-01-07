import { Outlet } from 'react-router-dom'
import Header from '@/components/header'
import { PrivateRoute } from '@/router'

function Entry() {
    return (
        // <PrivateRoute>
            <div className='P-entry'>
                <Header></Header>
                <div className='P-view'>
                    <Outlet></Outlet>
                </div>
            </div>
        // </PrivateRoute>
    )
}

export default Entry;