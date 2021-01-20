import {
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./header.style.scss";
import firebase from "firebase";
import { useDispatch } from "react-redux";

import { logoutUser } from "../../redux/actions/authAction";

const { SubMenu, Item } = Menu;

const Header = () => {
    const [current, setCurrent] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (e) => {
        setCurrent(e.key);
    };

    const logout = () => {
        firebase.auth().signOut();
        dispatch(logoutUser());
        history.push('/login')
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

            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="UserName">
                <Item key="setting:1">Option 1</Item>
                <Item key="setting:2">Option 2</Item>
                <Item icon={<userOutlined />} onClick={logout}>
                    Logout
                </Item>
            </SubMenu>

            <Item
                key="register"
                icon={<UserAddOutlined />}
                className="float-right"
            >
                <Link to="/register">Register</Link>
            </Item>
            <Item key="login" icon={<UserOutlined />} className="float-right">
                <Link to="/login">Login</Link>
            </Item>
        </Menu>
    );
};

export default Header;
