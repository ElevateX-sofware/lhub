import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import RoutePath from '../constants/routePath'
export const breadcum_dashboard = [
  { href: RoutePath.ADMIN.DASHBOARD, title: <React.Fragment><HomeOutlined /><span>Bảng điều khiển</span></React.Fragment> },
];

export const breadcum_analysis = [
  { href: RoutePath.ADMIN.DASHBOARD, title: <React.Fragment><HomeOutlined /><span>Bảng điều khiển</span></React.Fragment> },
  { href: RoutePath.ADMIN.ANALYSIS, title: <React.Fragment><UserOutlined /><span>Phân tích</span></React.Fragment> },
]