import { Button, Layout } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import PropTypes from "prop-types";
import styles from "./DefaultLayout.module.css";
import { useSelector } from 'react-redux';

const { Sider } = Layout;

const RightSidebar = ({ rightCollapsed, toggleRightCollapsed }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Sider collapsedWidth={40} width={380} collapsed={rightCollapsed} onCollapse={toggleRightCollapsed} className={styles.rightSidebar} theme={theme}>
      <Button type="primary" shape="circle" icon={rightCollapsed ? <LeftOutlined /> : <RightOutlined />} onClick={toggleRightCollapsed} className={styles.rightSidebarToggle} size="large" />
     
      <div className={styles.sidebarContent}>
        {/* Add your sidebar content here */}
      </div>
    </Sider>
  );
};

RightSidebar.propTypes = {
  rightCollapsed: PropTypes.bool.isRequired,
  toggleRightCollapsed: PropTypes.func.isRequired,
};

export default RightSidebar;
