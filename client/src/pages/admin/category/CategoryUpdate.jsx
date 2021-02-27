import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/sidBarNav/AdminNav";
import { useDispatch, useSelector } from "react-redux";
import { getOneCategoryAction } from "../../../redux/actions/categoryAction";

const CategoryUpdate = ({ history, match }) => {
    const { slug } = match.params;
    const [updateCategory, setUpdateCategory] = useState('');

    const dispatch = useDispatch();
    const {
        category,
    } = useSelector((state) => state.oneCategory);
        console.log("🚀 ~ file: CategoryUpdate.jsx ~ line 14 ~ CategoryUpdate ~ category", category)


    useEffect(() => {
        dispatch(getOneCategoryAction(slug));
        setUpdateCategory(category.name);
    }, [slug]);

    const onhandleSubmit = (e) => {
        e.preventDefault();
    };

    const showCategoryForm = () => {
        return (
            <form onSubmit={onhandleSubmit}>
                <div className="form-group">
                    <label className="">Name</label>
                    <input
                        className="form-control"
                        required
                        autoFocus
                        type="text"
                        value={updateCategory}
                        onChange={(e) => setUpdateCategory(e.target.value)}
                    />
                    <button type="submit" className="btn btn-outline-primary">
                        enoyer
                    </button>
                </div>
            </form>
        );
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>
                <div className="col">
                    {showCategoryForm()}
                </div>
            </div>
        </div>
    );
};

export default CategoryUpdate;
