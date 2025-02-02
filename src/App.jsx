import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  /**
   * TODO: 아래와 같은 구조로 컴포넌트를 만들고 Browser Router 설정하세요. UI는 신경쓰지 않습니다. 별도의 Router 컴포넌트 생성 여부는 자유입니다.
   * Home 컴포넌트는 <Link> 컴포넌트를 사용해서 Detail 컴포넌트로 이동하도록 하세요.
   * Detail 컴포넌트를 path parameter 로 id 를 받도록 하세요.
   * Detail 컴포넌트는 path parameter 로 받은 id 를 콘솔로그로 찍으세요.
   * 
   * src/
    |-- pages/
    |   |-- Home.jsx
    |   |-- Detail.jsx
    |-- App.jsx
   */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} >
          <Route index element={<Navigate to="1" replace />} />
          <Route path=":id" element={<Detail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// App.jsx에 router를 만드는 것과 Shared 폴더를 구성해서 만드는 것에 대한 것
// useNavigate hook 사용
