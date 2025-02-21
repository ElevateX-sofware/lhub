import { Button, Input, Layout, Badge, Popover } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../store/services/themeSlice";
const { Header } = Layout;
const { Search } = Input;
const HeaderComponent = React.memo(
    ({ collapsed, toggleCollapsed, onSearch }) => {
        const theme = useSelector((state) => state.theme.theme);
        const dispatch = useDispatch();
        const handleThemeChange = () => {
            dispatch(setTheme(theme === "light" ? "dark" : "light"));
        };
        const notificationContent = (
            <div style={{ fontSize: "16px" }}>
                <p>Thông báo 1</p>
                <p>Thông báo 2</p>
            </div>
        );
        return (
            <Header
                style={{
                    padding: "0 16px",
                    background: theme === "light" ? "#fff" : "",
                    color: theme === "light" ? "inherit" : "#fff",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Button type="text" onClick={toggleCollapsed} style={{ fontSize: "16px", marginRight: "16px", color: theme === "light" ? "inherit" : "#fff" }}>
                    {collapsed ? <MenuUnfoldOutlined style={{ color: theme === "light" ? "inherit" : "#fff" }} /> : <MenuFoldOutlined style={{ color: theme === "light" ? "inherit" : "#fff" }} />}
                </Button>
                <Search placeholder="Tìm kiếm..." onSearch={onSearch} enterButton style={{ maxWidth: 300, marginRight: "auto" }} />
                <Button type="text" onClick={handleThemeChange} style={{ fontSize: '24px', marginRight: '16px', color: theme === "light" ? "inherit" : "#fff" }}>
                    {theme === "light" ? <MoonOutlined style={{ color: theme === "light" ? "inherit" : "#fff" }} /> : <SunOutlined style={{ color: theme === "light" ? "inherit" : "#fff" }} />}
                </Button>
                <Popover placement="bottomRight" content={notificationContent} trigger="click">
                    <Badge count={5} overflowCount={10} offset={[-15, 0]} size="small">
                        <BellOutlined style={{ fontSize: '24px', marginRight: '16px', color: theme === "light" ? "inherit" : "#fff" }} />
                    </Badge>
                </Popover>
            </Header>
        );
    }
);
HeaderComponent.displayName = 'HeaderComponent'
HeaderComponent.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    toggleCollapsed: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default HeaderComponent;