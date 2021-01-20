import React, { useState } from "react";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const HandleSubmit = async (e) => {
        e.preventDefault();
        console.table(email, password);
    };

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
                    icon={<MailOutlined/>}
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
                    <h4>Login</h4>
                    {loginForm()}
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    );
};

export default Login;
