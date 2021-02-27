import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/sidBarNav/AdminNav";
import { useDispatch, useSelector } from "react-redux";
import { getOneCategoryAction } from "../../../redux/actions/categoryAction";

const CategoryUpdate = ({ params }) => {
    const { slug } = params;
    console.log(
        "🚀 ~ file: CategoryUpdate.jsx ~ line 10 ~ CategoryUpdate ~ slug",
        slug
    );

    const dispatch = useDispatch();
    const { category } = useSelector((state) => state.oneCategory);

    useEffect(() => {
        dispatch(getOneCategoryAction(slug));
    });

    // const showCategoryForm = () => {
    //     return (
    //         <form onSubmit={onhandleSubmit}>
    //             <div className="form-group">
    //                 <label className="">Name</label>
    //                 <input
    //                     className="form-control"
    //                     required
    //                     autoFocus
    //                     type="text"
    //                     value={category}
    //                     onChange={(e) => setCategory(e.target.value)}
    //                 />
    //                 <button type="submit" className="btn btn-outline-primary">
    //                     enoyer
    //                 </button>
    //             </div>
    //         </form>
    //     );
    // };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>
                <div className="col">Admin dashboard</div>
            </div>
        </div>
    );
};

export default CategoryUpdate;
