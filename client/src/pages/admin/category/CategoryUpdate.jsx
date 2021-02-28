import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/sidBarNav/AdminNav";
import { useDispatch, useSelector } from "react-redux";
import {
    getOneCategoryAction,
    updateCategoryAction,
} from "../../../redux/actions/categoryAction";
import { toast } from "react-toastify";
import {
    UPDATE_CATEGORY_RESTET,
    GETONE_CATEGORY_RESET,
} from "../../../redux/type/categoryType";

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
        return () => {
            dispatch({ type: GETONE_CATEGORY_RESET });
            setUpdateCategory("");
        };
    }, []);

        
    
    //quand success est a true je met a jour mon state
    useEffect(() => {
        if (success) {
            setUpdateCategory(category.name);
        }
        if (successUpadte) {
            toast.success("Updaded !");
            history.push("/admin/category");
            dispatch({ type: UPDATE_CATEGORY_RESTET });
        }
    }, [slug, history, successUpadte, dispatch,success]);

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
