import {
    AppstoreOutlined,
    LogoutOutlined,
    SettingOutlined,
    UserAddOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import firebase from "firebase";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutUser } from "../../redux/actions/authAction";
import "./header.style.scss";

const { SubMenu, Item } = Menu;

const Header = () => {
    const [current, setCurrent] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const userAuhtState = useSelector((state) => state.auth);

    const handleClick = (e) => {
        setCurrent(e.key);
    };

    const logout = () => {
        firebase.auth().signOut();
        dispatch(logoutUser());
        history.push("/login");
    };

    return (
        <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            classnames="_navbar"
        >
            <Item key="home" icon={<AppstoreOutlined />}>
                <Link to="/">Home</Link>
            </Item>

            {!userAuhtState ? (
                <>
                    <Item
                        key="login"
                        icon={<UserOutlined />}
                        className="float-right"
                    >
                        <Link to="/login">Login</Link>
                    </Item>
                    <Item
                        key="register"
                        icon={<UserAddOutlined />}
                        className="float-right"
                    >
                        <Link to="/register">Register</Link>
                    </Item>
                </>
            ) : (
                <SubMenu
                    key="SubMenu"
                    icon={<SettingOutlined />}
                    title="UserName"
                >
                    <Item key="setting:1">Option 1</Item>
                    <Item key="setting:2">Option 2</Item>
                    <Item icon={<LogoutOutlined />} onClick={logout}>
                        Logout
                    </Item>
                </SubMenu>
            )}
        </Menu>
    );
};

export default Header;
