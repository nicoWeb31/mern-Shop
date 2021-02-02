import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/actions/authAction";


const RegisterComplete = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();


    useEffect(() => {
        const email = window.localStorage.getItem("emailForRegistration");
        setEmail(email);
    }, []);

    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return toast.error("Email and password is required !");
        }
        if (password.length < 6) {
            return toast.error(
                "Password too short he must be at least 6 characters"
            );
        }

        try {
            const result = await auth.signInWithEmailLink(
                email,
                window.location.href
            );

            if (result.user.emailVerified) {
                //delete storage
                window.localStorage.removeItem("emailForRegistration");
                //get user id token
                let user = auth.currentUser;
                await user.updatePassword(password);
                const idTokenResult = await user.getIdTokenResult();
                //redux store
                //TODO:

                dispatch(loginUser(idTokenResult));

                //console.log("user",user,'idTokenResult',idTokenResult);
                //redirect
                history.push("/");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    //____________________form_________________________________
    const registerFormComplete = () => {
        return (
            <form onSubmit={HandleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        disabled
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus
                        placeholder="Password"
                    />
                </div>
                <button className="btn btn-raised" type="submit">
                    Complete register
                </button>
            </form>
        );
    };

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register complete</h4>
                    {registerFormComplete()}
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    );
};

export default RegisterComplete;
