import { createGlobalStyle } from "styled-components";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const GlovalStyle = createGlobalStyle`
/* 글로벌 스타일  */

body{
  box-sizing: border-box;
}

#root{
  text-align: center;

}
*{
  box-sizing: inherit;
}

.cursor-pointer{
  cursor: pointer;
}
`;


function App(){
  return (
    <>
    <GlovalStyle />
    {/* 부트스트랩 연습 */}
    {/* <Button variant="primary">primary</Button> */}
    {/* <button type="button" className="btn btn-primary">primary</button> */}

    {/* 헤더 영역: 상단 네비게이션 바 */}
    <header>
    
    </header>
    </>
  );
}

export default App;
