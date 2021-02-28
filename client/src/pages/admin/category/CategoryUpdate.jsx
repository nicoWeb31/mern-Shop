import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/sidBarNav/AdminNav";
import { useDispatch, useSelector } from "react-redux";
import {
    getOneCategoryAction,
    updateCategoryAction,
    getAllCategoryAction,
} from "../../../redux/actions/categoryAction";
import { toast } from "react-toastify";
import {
    UPDATE_CATEGORY_RESTET,
    GETONE_CATEGORY_RESET,
} from "../../../redux/type/categoryType";
import { set } from "mongoose";

const CategoryUpdate = ({ history, match }) => {
    const { slug } = match.params;
    const [updateCategory, setUpdateCategory] = useState("");

    const dispatch = useDispatch();
    const { category, success } = useSelector((state) => state.oneCategory);

    const { success: successUpadte } = useSelector(
        (state) => state.updateCategory
    );

    //au montage et demontage du component
    useEffect(() => {
        dispatch(getOneCategoryAction(slug));
    }, []);

    //quand success est a true je met a jour mon state
    useEffect(() => {
        if (success) {
            setUpdateCategory(category.name);
        }
    }, [success, category]);

    useEffect(() => {
        if (successUpadte) {
            dispatch({type: UPDATE_CATEGORY_RESTET})
            history.push("/admin/category");
        }
    }, [successUpadte, history]);

    const onhandleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCategoryAction(slug, updateCategory));
        toast.success("Updaded !");
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
                        envoyer
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
