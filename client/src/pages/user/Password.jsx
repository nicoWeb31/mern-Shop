import React, { useState, useEffect } from "react";
import UserNav from "../../components/sidBarNav/UserNav";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Password = () => {
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {});

    const handleUpdateForm = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (passwordConf === password) {
            try {
                await auth.currentUser.updatePassword(password);
                toast.success("password updated successfully");
                setLoading(false);
            } catch (error) {
                toast.error(error.message);
                setLoading(false);
            }
        } else {
            setLoading(false);
            toast.error("password and confirm password do not match");
        }
    };

    const passwordUpdateForm = () => {
        return (
            <form onSubmit={handleUpdateForm}>
                <div className="form-group">
                    <label>Your password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        value={password}
                        placeholder="give a new password"
                    />
                    <input
                        type="password"
                        name="confPassword"
                        onChange={(e) => setPasswordConf(e.target.value)}
                        className="form-control"
                        placeholder="give a new password"
                        value={passwordConf}
                    />

                    <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={password !== passwordConf || password.length < 6 }
                    >
                        Submit
                    </button>
                </div>
            </form>
        );
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <UserNav />
                </div>
                <div className="col">
                    {loading ? (
                        <h4 className="text-danger"> Loading......</h4>
                    ) : (
                        <>
                            <h3>rest password</h3>
                            {passwordUpdateForm()}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Password;
