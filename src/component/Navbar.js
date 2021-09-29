import React from 'react'
import { Menu } from "antd";
import {  UserOutlined, LoginOutlined, HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import useUser from '../hooks/useUser';
import Sidebar from './Sidebar';

export default function Navbar() {
  const history = useHistory();
  const location  = useLocation();
  const [user, setUser,logout] = useUser();

  return (
    <Menu selectedKeys={[location.pathname]} mode="horizontal">
      <Menu.Item>
        <Sidebar />
      </Menu.Item>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/user" icon={<UserOutlined />}>
        <Link to="/user">Halaman User</Link>
      </Menu.Item>
      {user.name === "guest" ? (
        <Menu.Item key="/login" icon={<LoginOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      ) : (
        <Menu.Item 
        key="/login" 
        icon={<LogoutOutlined />} 
        onClick={() => {
          logout();
          history.replace("/")
        }}>
          Logout
        </Menu.Item>
      )}
    </Menu>
  );
}
