import React, { useState,useEffect } from "react";
import { auth, googleAuthProvider } from "../../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined,GoogleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/actions/authAction";
import { Link } from 'react-router-dom';

const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoding] = useState(false);

    const dispatch = useDispatch();
    const userAuhtState = useSelector((state) => state.auth);

    useEffect(() => {
        if (userAuhtState) {
            history.push("/");
        }
    }, []);



    const HandleSubmit = async (e) => {
        e.preventDefault();
        setLoding(true);
        console.table(email, password);
        try {
            const { user } = await auth.signInWithEmailAndPassword(
                email,
                password
            );

            const idTokenResult = await user.getIdTokenResult();

            dispatch(
                loginUser({ email: user.email, token: idTokenResult.token })
            );
            toast.success("Login with success");
            history.push("/");
        } catch (error) {
            toast.error(error.message);
            setLoding(false);
        }
    };

    const HandleSubmitWithGoogle = async()=>{
        auth.signInWithPopup(googleAuthProvider)
        .then(async (result) => {
            const { user } = result;
            const idTokenResult = await user.getIdTokenResult();

            dispatch(
                loginUser({ email: user.email, token: idTokenResult.token })
            );
            toast.success("Login with success");
            history.push("/");
        })
        .catch(
            (err)=> toast.error(err.message)
        )
    }

    //____________________form_________________________________
    const loginForm = () => {
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
                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="Your Password"
                    />
                </div>
                <br />
                <Button
                    type="primary"
                    className="mb-3"
                    block
                    shape="round"
                    icon={<MailOutlined />}
                    onClick={HandleSubmit}
                    disabled={!email || password.length < 6}
                >
                    {" "}
                    Login with Email/Password
                </Button>
            </form>
        );
    };

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    { !loading ? (<h4>Login</h4>) : (<h4 className="text-danger">Loding....</h4>)}
                    {loginForm()}

                    <Button
                    type="danger"
                    block
                    shape="round"
                    icon={<GoogleOutlined />}
                    onClick={HandleSubmitWithGoogle}
                    size="large"

                >
                    {" "}
                    Login with Google
                </Button>
                <Link to='/forget/password' className="float-right text-danger m-3"> Forget password</Link>
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    );
};

export default Login;
