import React from "react";
import ReactDOM from "react-dom";

import { ConfigProvider } from "antd";
import zhCN from 'antd/es/locale/zh_CN'
import App from "@/pages/login"

// 全局样式
import '@/common/style/frame.styl'

const antdConfig = {
  locale: zhCN,
}

ReactDOM.render(
  <ConfigProvider {...antdConfig}>
    <App />
  </ConfigProvider>, document.getElementById("root"))