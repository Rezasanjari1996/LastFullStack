import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Root:React.FC = () =>{
    return (
        <div id="root-main-div">
            <div>
                <p><h1 >صفحه اصلی</h1></p>
                <Link to="/table"><button className="btn btn-primary">نمایش اطلاعات</button></Link>
            </div>
        </div>
    );
}



export default Root;