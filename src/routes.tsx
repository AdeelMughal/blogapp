import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Sidebar from "./components/Sidebar";
import { Layout } from "antd";
import "./App.css";

const { Content } = Layout;

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }} className="layout">
        <Sidebar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/details/:id" element={<BlogDetails />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
