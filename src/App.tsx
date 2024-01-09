import { useEffect, useState } from "react";
import { Layout, theme } from "antd";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Document from "./pages/document";
import Employees from "./pages/employees";
import Tasks from "./pages/tasks";
import UserInfo from "./pages/user-info";
import UserKpi from "./pages/user-kpi";
import AuthPage from "./pages/auth";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";

const { Content } = Layout;

const App: React.FC = () => {
  const [auth, setAuth] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  return auth ? (
    <Layout>
      <Sidebar collapsed={collapsed} selectedKeys={selectedKeys} />
      <Layout>
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content style={{ margin: "24px 20px 16px 20px", height: "80vh", overflowY: "auto", background: '#f6f6f6'}}>
          
          <Routes>
            <Route path="/" element={<Document />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/user-info" element={<UserInfo />} />
            <Route path="/user-kpi" element={<UserKpi />} />
          </Routes>

        </Content>
      </Layout>
    </Layout>
  ) : (
    <AuthPage />
  );
};

export default App;
