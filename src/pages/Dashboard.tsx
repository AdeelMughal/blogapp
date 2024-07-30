import React from "react";
import { Layout, Menu, Card, Typography, Row, Col } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Dashboard: React.FC = () => {
  // Sample data for chart
  const data = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 2000 },
    { name: "Apr", value: 2780 },
    { name: "May", value: 1890 },
    { name: "Jun", value: 2390 },
    { name: "Jul", value: 3490 },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Title level={3} style={{ color: "white", textAlign: "center" }}>
            Dashboard
          </Title>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Total Users" bordered={false}>
                  <Title level={2}>1,234</Title>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Active Users" bordered={false}>
                  <Title level={2}>567</Title>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Sales" bordered={false}>
                  <Title level={2}>$12,345</Title>
                </Card>
              </Col>
            </Row>
            <div style={{ marginTop: 20 }}>
              <Title level={4}>Sales Over Time</Title>
              <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
