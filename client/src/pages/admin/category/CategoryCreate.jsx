import React, { useEffect, useState } from "react";
import AdminNav from "../../../components/sidBarNav/AdminNav";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { FETCH_CATEGORY_RESET } from "../../../redux/type/categoryType";
import {
    getAllCategoryAction,
    createCategoryAction,
    removeCategoryAction,
} from "../../../redux/actions/categoryAction";
import { Link } from "react-router-dom";

const CategoryCreate = () => {
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();
    // const { token } = useSelector((state) => state.auth);
    const { error, loading, category: newCategory, success } = useSelector(
        (state) => state.createCategory
    );
    const {success: successUpdate} = useSelector((state) => state.updateCategory)

    const {
        loading: loadingGetCat,
        allCategories: { category: categories },
        error: errorGetCat,
    } = useSelector((state) => state.allCategory);

    const { success: successDelete } = useSelector(
        (state) => state.deleteCategory
    );

    useEffect(() => {
        dispatch(getAllCategoryAction());
        // return () => {
        //     dispatch({ type: FETCH_CATEGORY_RESET });
        // };
    }, [dispatch,successDelete,success, successUpdate]);

    //_________________________function____________________________________________________

    const onhandleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCategoryAction({ name: category }));
        setCategory("");
        toast.success(`category ${category} create with success`);
        dispatch(getAllCategoryAction());
    };

    const onDeleteCategory = (slug) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            dispatch(removeCategoryAction(slug));
            toast.success("delete with success !");
            dispatch(getAllCategoryAction());
        }
    };

    //_________________________render____________________________________________________

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
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <button type="submit" className="btn btn-outline-primary">
                        enoyer
                    </button>
                </div>
            </form>
        );
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <AdminNav />
                    </div>
                    <div className="col">
                        {loading ? (
                            <h4 className="text-danger">Loading</h4>
                        ) : (
                            <h4>Create Category</h4>
                        )}
                        {showCategoryForm()}
                        <hr />
                        {categories &&
                            categories.map((category) => (
                                <div
                                    key={category._id}
                                    className="alert alert-secondary"
                                >
                                    {category.name}
                                    <span
                                        className="btn btn sm float-right"
                                        onClick={() =>
                                            onDeleteCategory(category.slug)
                                        }
                                    >
                                        <DeleteOutlined className="text-warning" />
                                    </span>
                                    <span className="btn btn sm float-right">
                                        <Link
                                            to={`/admin/category/${category.slug}`}
                                        >
                                            <EditOutlined className="text-danger" />
                                        </Link>
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCreate;
