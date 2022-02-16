import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import Header from '@/components/header'
import { goto } from '@/api'
import './home.styl'

function Home() {
  // 创建路由钩子
  const navigate = useNavigate()
  return (
    <div className="P-home">
      <Header />
      <h1>Home Page</h1>
      <div className="ipt-con">
        <Button onClick={() => {
          navigate('/login')
        }}>组件外跳转</Button>
      </div>
      <div className="ipt-con">
        <Button onClick={() => {
          navigate('/login')
        }}>返回登录</Button>
      </div>
    </div>
  )
}

export default Home