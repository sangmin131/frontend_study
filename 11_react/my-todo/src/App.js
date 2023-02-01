import { createGlobalStyle } from "styled-components";
// 글로벌(공통) 스타일 적용 index.css 에서 해도 무방하지만
// styled-components를 사용해서 적용하고 싶다면..?
// createGlobalStyle을 사용하면 컴포넌트가 만들어지고 이를 렌더링하면 됨

const GlobalStyle = createGlobalStyle`
/* reset css적용 */
${reset}
/* 글로벌(공통) 스타일 */

body {
  background: #e9ecef;
}
`;
function App() {
  return (
    <>
    {/* <Reset> */}
    <GlobalStyle/>
    <TodoTemplateWrapper>

    </TodoTemplateWrapper>
    </>

  );
}

export default App;

// 패키지 설치

//  npm install styled-components styled-reset react-icons

// react-icons: 리액트에서 다양한 아이콘을 쓸 수 있는 라이브러리
// SVG 형태의 아이콘을 리액트 컴포넌트처럼 쉽게 사용
// 커스텀은 props 또는 css스타일로 변경가능 
