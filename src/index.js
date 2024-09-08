import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from '@/store'
import reportWebVitals from './reportWebVitals';

import { RouterProvider } from 'react-router-dom';
import router from '@/router'
import './theme.css'
//npm i @reduxjs/toolkit react-redux react-router-dom classnames dayjs axios antd-mobile --save
//别名路径配置 webpack ，吧@/解析为src/     @craco/craco插件  CRA 吧webpack配置包装了  无法直接修改  需要借助craco
// vscode路径联想配置   在vscode输入@/ 自动联想出对应的 src下的子目录
// 安装@craco/craco => 根目录创建 craco.config.js  =>配置文件中添加路径解析配置 => 包文件中配置启动打包命令  craco start craco build
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <Provider store={store}>

     <RouterProvider router={router}></RouterProvider>
     </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
