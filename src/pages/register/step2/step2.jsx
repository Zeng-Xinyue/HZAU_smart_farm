import { Outlet } from "react-router-dom";

function Step2(){
    return (
        <div className="P-step2" style={{position: 'relative'}}>
            <Outlet></Outlet>
        </div>
    )
}

export default Step2;