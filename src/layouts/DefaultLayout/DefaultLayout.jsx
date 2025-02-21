import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import BreadcumUI from "../../components/ui/BreadcumUI";
import Sidebar from "./Sidebar";
import HeaderComponent from "./HeaderComponent";
import styles from "./DefaultLayout.module.css";
import RightSidebar from "./RightSidebar";
const { Content } = Layout;
const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const toggleCollapsed = useCallback(() => setCollapsed((prev) => !prev), []);
  const toggleRightCollapsed = useCallback(() => setRightCollapsed((prev) => !prev), []);
  const onSearch = useCallback((value, _e, info) => {
    console.log(info?.source, value);
  }, []);
  return (
    <Layout className={styles.layout}>
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <Layout>
        <HeaderComponent collapsed={collapsed} toggleCollapsed={toggleCollapsed} onSearch={onSearch} />
        <BreadcumUI className={styles.breadcum} />
        <Layout className={styles.mainLayout}>
          <Content className={styles.content}>{children}</Content>
        </Layout>
      </Layout>
      <RightSidebar rightCollapsed={rightCollapsed} toggleRightCollapsed={toggleRightCollapsed} />
    </Layout>
  );
};
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DashboardLayout;
