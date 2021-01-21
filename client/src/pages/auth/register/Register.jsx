import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Register = ({ history }) => {
    const [email, setEmail] = useState("");

    const userAuhtState = useSelector((state) => state.auth);

    useEffect(() => {
        if (userAuhtState && userAuhtState.token) history.push("/");
    }, [userAuhtState]);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        // console.log(process.env.REACT_APP_REGISTER_REDIRECT_URL)
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
        };

        await auth.sendSignInLinkToEmail(email, config);

        toast.success(
            `Email is Sent to ${email}.Please Click the link to complete your registration.`
        );

        //save user and email in local storage
        window.localStorage.setItem("emailForRegistration", email);

        //clear state
        setEmail("");
    };

    //____________________form_________________________________
    const registerForm = () => {
        return (
            <form onSubmit={HandleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        autoFocus
                        placeholder="Your Email"
                    />
                </div>
                <br />
                <button className="btn btn-raised" type="submit">
                    register
                </button>
            </form>
        );
    };

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    {registerForm()}
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    );
};

export default Register;
