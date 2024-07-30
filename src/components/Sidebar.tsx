import React, { useEffect, useState } from "react";
import { Layout, Menu, Avatar } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { fetchUserDetails } from "../api";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const [user, setUser] = useState<{
    username: string;
    profilePicture: string;
  } | null>(null);

  useEffect(() => {
    fetchUserDetails(Math.floor(Math.random() * 10) + 1).then((response) => {
      setUser({
        username: response.data.username,
        profilePicture: `https://i.pravatar.cc/150?u=${response.data.username}`,
      });
    });
  }, []);

  return (
    <Sider width={200} className="site-layout-background">
      {user && (
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <Avatar size={64} src={user.profilePicture} icon={<UserOutlined />} />
          <p style={{ margin: "10px" }}>{`Hello ${user.username}`}</p>
        </div>
      )}
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileTextOutlined />}>
          <Link to="/blogs">Blogs</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
