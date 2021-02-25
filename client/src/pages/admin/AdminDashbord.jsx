import React from 'react';
import AdminNav from '../../components/sidBarNav/AdminNav';


const AdminDashbord = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-2">

                    <AdminNav/>
                </div>
                <div className="col">Admin dashboard</div>
            </div>
        </div>
    )
}

export default AdminDashbord
