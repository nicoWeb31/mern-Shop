import {
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";

const { SubMenu,Item } = Menu;

const Header = () => {
    const [current, setCurrent] = useState("");

    const handleClick = (e) => {
        setCurrent(e.key);
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
            </SubMenu>

                <Item
                    key="register"
                    icon={<UserAddOutlined />}
                    className="float-right"
                >
                    <Link to="/register">Register</Link>
                </Item>
                <Item
                    key="login"
                    icon={<UserOutlined />}
                    className="float-right"
                >
                    <Link to="/login">Login</Link>
                </Item>

        </Menu>
    );
};

export default Header;
