import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/sidBarNav/AdminNav";
import { useDispatch, useSelector } from "react-redux";
import {
    getOneCategoryAction,
    updateCategoryAction,
} from "../../../redux/actions/categoryAction";
import { toast } from "react-toastify";
import { UPDATE_CATEGORY_RESTET } from "../../../redux/type/categoryType";

const CategoryUpdate = ({ history, match }) => {
    const { slug } = match.params;
    const [updateCategory, setUpdateCategory] = useState("");

    const dispatch = useDispatch();
    const { category } = useSelector((state) => state.oneCategory);


    const { success: successUpadte } = useSelector(
        (state) => state.updateCategory
    );

    useEffect(() => {
        if (successUpadte) {
            toast.success("Updaded !");
            history.push("/admin/category");
            dispatch({ type: UPDATE_CATEGORY_RESTET });
        } else {
            if (!category.name || category.slug !== slug) {
                dispatch(getOneCategoryAction(slug));
            } else {
                setUpdateCategory(category.name);
            }
        }
    }, [dispatch, slug, history, successUpadte,category]);

    const onhandleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCategoryAction(slug, updateCategory));
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
                <div className="col">{showCategoryForm()}</div>
            </div>
        </div>
    );
};

export default CategoryUpdate;
