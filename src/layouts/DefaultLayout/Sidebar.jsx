import { Layout, Menu, Space } from "antd";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import menu_dashboard from "../../data/ui/menu_dashboard";
import { SlackOutlined, } from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
const { Sider } = Layout;
const Sidebar = React.memo(({ collapsed, toggleCollapsed }) => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.theme);
  const selectRoute = (e) => {
    navigate(e.key);
  };
  const renderLogo = () => (
    <Space>
      <SlackOutlined style={{ fontSize: '30px', color: '#ff4500' }} />
      <div style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
        <span style={{ color: '#ff6347' }}>E</span>
        <span style={{ color: '#ffa07a' }}>l</span>
        <span style={{ color: '#ffd700' }}>e</span>
        <span style={{ color: '#98fb98' }}>a</span>
        <span style={{ color: '#87cefa' }}>r</span>
        <span style={{ color: '#dda0dd' }}>n</span>
      </div>
    </Space>
  );
  return (
    <Sider width={226} collapsed={collapsed} onCollapse={toggleCollapsed} theme={theme}>
      <div style={{ padding: collapsed ? "16px" : "16px 0px 16px 30px", fontSize: '14px', display: "flex", justifyContent: collapsed ? "center" : "start" }}>
        {collapsed ? <SlackOutlined style={{ fontSize: '30px', color: '#ff4500' }} /> : renderLogo()} 
      </div>
      <Menu
        onSelect={selectRoute}
        theme={theme}
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menu_dashboard}
      />
    </Sider>
  );
});
Sidebar.displayName = 'Sidebar'
Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleCollapsed: PropTypes.func.isRequired,
};

export default Sidebar;
