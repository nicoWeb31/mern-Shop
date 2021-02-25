import React,{useEffect, useState} from 'react'
import AdminNav from '../../../components/sidBarNav/AdminNav';
import toast from 'react-toastify';
import {useSelector,useDispatch} from 'react-redux';
import { getAllCategoryAction, createCategoryAction,removeCategoryAction} from '../../../redux/actions/categoryAction'

const CategoryCreate = () => {

    const [category,setCategory] = useState('');

    const dispatch =  useDispatch();
    const {token} = useSelector(state => state.auth);



    console.log("🚀 ~ file: CategoryCreate.jsx ~ line 21 ~ CategoryCreate ~ token", token)




    //_________________________function____________________________________________________

    const onhandleSubmit = () => {
        dispatch(createCategoryAction(category));
    }


    //_________________________render____________________________________________________

    const showCategoryForm =() =>{
        return (
            <form onSubmit={onhandleSubmit} >
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={category} onChange={e=>setCategory(e.target.value)}/>
                    <button type="submit">enoyer</button>
                </div>
            </form>
        )
    }


    return (
        <div>
                    <div className='container-fluid'>
            <div className="row">
                <div className="col-md-2">

                    <AdminNav/>
                </div>
                <div className="col">
                    <h4>Create Category</h4>
                    {showCategoryForm()}
                </div>
            </div>
        </div>
        </div>
    )
}

export default CategoryCreate
