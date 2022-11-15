import React from 'react';
import { Dropdown, Menu } from 'antd';
import {useNavigate} from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()
    const menu = (
        <Menu>
            <Menu.Item key={1} onClick={()=>navigate('/')}>Home</Menu.Item>
            <Menu.Item key={2} onClick={()=>navigate('/chart')}>Chart</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menu}>
            <a>Page</a>
        </Dropdown>
    );
};

export default Nav;
