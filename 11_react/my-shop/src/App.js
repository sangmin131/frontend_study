import { createGlobalStyle } from "styled-components";
import { Button, Container, Nav, Navbar,} from "react-bootstrap";
import { ToastContainer } from "react-toastify";
// bootstrap: 레이아웃을 복사, 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 부트스트랩 연습 */}
      {/* <Button variant="primary">Primary</Button> */}
      {/* <button type="button" className="btn btn-primary">Primary</button> */}

      {/* Quiz: Header 컴포넌트 추출 및 Outlet 활용하여 라우팅 구성해보기 */}
      <Routes>
        <Route path="/" element={<Header />}>
          {/* indexL index route(여기서는) default child route*/}
          <Route index element={<Main />}/>
          {/* /detail/1 로 접속하면 productId에 1이 담김 */}
          <Route path="/detail/:productId" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<div>페이지가 존재하지 않습니다.😅</div>}/>
        </Route>
      </Routes>

      <ToastContainer
      position="bottom-right"
      autoClose={3000}
      pauseOnFocusLoss={false}
      theme="dark"
      />


    </>
  );
}

export default App;
