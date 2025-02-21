import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, PieChartOutlined, BookOutlined, SettingOutlined, ReadOutlined } from "@ant-design/icons";
import RoutePath from '../constants/routePath';

const menu_dashboard = [
  { key: RoutePath.HOME, icon: <PieChartOutlined style={{ color: '#1890ff' }} />, label: "Trang chủ" },
  { key: RoutePath.COURSES, label: "Khám phá khóa học", icon: <ReadOutlined style={{ color: '#eb2f96' }} /> },
  { key: RoutePath.MY_COURSES, icon: <DesktopOutlined style={{ color: '#52c41a' }} />, label: "Khóa học của tôi" },
  { key: RoutePath.SCHEDULE, icon: <ContainerOutlined style={{ color: '#faad14' }} />, label: "Lịch học cá nhân" },
  { key: RoutePath.STUDY, label: "Học tập", icon: <AppstoreOutlined style={{ color: '#722ed1' }} /> },
  { key: RoutePath.LIBRARY, label: "Thư viện tài liệu", icon: <BookOutlined style={{ color: '#13c2c2' }} /> },
  { key: RoutePath.ACCOUNT_SETTINGS, label: "Cài đặt tài khoản", icon: <SettingOutlined style={{ color: '#fa541c' }} /> },
];

export default menu_dashboard;
