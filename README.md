# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

├─ /config <-- webpack 配置目录
├─ /node_modules
├─ /public
| ├─ favicon.ico <-- 网页图标
| └─ index.html <-- HTML 页模板
├─ /scripts <-- node 编译脚本
├─ /src
| ├─ /api <-- api 目录
| | └─ index.js <-- api 库
| ├─ /common <-- 全局公用目录
| | ├─ /fonts <-- 字体文件目录
| | ├─ /images <-- 图片文件目录
| | ├─ /js <-- 公用 js 文件目录
| | └─ /style <-- 公用样式文件目录
| | | ├─ frame.styl <-- 全部公用样式（import 本目录其他全部 styl）
| | | ├─ reset.styl <-- 清零样式（如果使用 Ant Design，就无需此文件）
| | | └─ global.styl <-- 全局公用样式
| ├─ /components <-- 公共模块组件目录
| | ├─ /header <-- 头部导航模块
| | | ├─ index.js <-- header 主文件
| | | └─ header.styl <-- header 样式文件
| | └─ ... <-- 其他模块
| ├─ /pages <-- 页面组件目录
| | ├─ /home <-- home 页目录
| | | ├─ index.js <-- home 主文件
| | | └─ home.styl <-- home 样式文件
| | ├─ /login <-- login 页目录
| | | ├─ index.js <-- login 主文件
| | | └─ login.styl <-- login 样式文件
| | └─ ... <-- 其他页面
| ├─ App.js <-- 项目主模块
| ├─ index.js <-- 项目入口文件
| ├─.gitignore
| ├─ package.json
| ├─ README.md
| └─ yarn.lock

1. 项目使用 Stylus 作为 css 预处理语言
2. 样式命名规范
   G-xx： 表示全局样式，用来定义公用样式。
   P-xx: 表示页面样式，用来设置页面的背景色、尺寸、定制化调整在此页面的组件样式。
   M-xx: 表示组件样式，专注组件本身样式。
