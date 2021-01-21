import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "../../../firebase";

const ForgotPassword = ({ history }) => {
    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);

    const userAuhtState = useSelector((state) => state.auth);

    useEffect(() => {
        if (userAuhtState && userAuhtState.token) {
            history.push("/");
        }
    }, [userAuhtState]);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        const config = {
            url: process.env.REACT_APP_FORGOT_PASSWORD_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
        };

        // try {
        //     await auth.sendPasswordResetEmail(email, config);
        //     setEmail('');
        //     setLoading(false);
        //     toast.success('Check your email address for password rest link')

        // } catch (error) {
        //     setLoading(false);
        //     toast.error(error.message);
        //     console.log(
        //         "🚀 ~ file: ForgotPassword.jsx ~ line 36 ~ onSubmitForm ~ error",
        //         error
        //     );
        // }

        await auth
            .sendPasswordResetEmail(email, config)
            .then(() => {
                setEmail('')
                setLoading(false);
                toast.success('Check your email address for password rest link')
            })
            .catch((err) => {
                console.log(
                    "🚀 ~ file: ForgotPassword.jsx ~ line 50 ~ onSubmitForm ~ err",
                    err
                );
                setLoading(false);
                toast.error(err.message);
            });
    };

    return (
        <div className="container col-md-6 offset-md-3 p-5">
            {!loading ? (
                <h4>forgot password</h4>
            ) : (
                <h4 className="text-danger">Loading.....</h4>
            )}

            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Type your email"
                        autoFocus
                    />
                </div>

                <hr />
                <button className="btn btn-raised" disabled={!email}>
                    {" "}
                    Submit{" "}
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
