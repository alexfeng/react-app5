import { Button } from 'antd';
import Login from '@/pages/login';
import Home from '@/pages/home';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <Routes>
        {/* 路由精确匹配'/home',跳转 Home 页面 */}
        <Route exact path='/home' element={<Home />} />

        {/* 路由精确匹配'/login',跳转 Login 页面 */}
        <Route exact path='/login' element={<Login />} />

        {/* 未匹配则跳转 Login 页面 */}
        <Route path='*' element={<Navigate to="login" />} />

      </Routes>
    </HashRouter>
    // <div className="App">
    //   <h1> React-App5 </h1>
    //   <Button type='primary'>Button</Button>
    // </div>
  );
}

export default App;
