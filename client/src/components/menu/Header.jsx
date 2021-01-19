import {
    SettingOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from 'react';

const { SubMenu } = Menu;

const Header = () => {

    const [current,setCurrent] = useState('')
 
    const handleClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key );
    };



        return (
            <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
            >
                <Menu.Item key="mail">
                    Home
                </Menu.Item>
                
                <SubMenu
                    key="SubMenu"
                    icon={<SettingOutlined />}
                    title="Register"
                >

                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>


                </SubMenu>

            </Menu>
        );
    
}

export default Header;
