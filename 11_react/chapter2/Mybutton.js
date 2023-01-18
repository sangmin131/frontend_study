// 리액트 함수형 컴포넌트
// onlt JS로만 짠 코드
// 이렇게 안할거임 해보는거임
function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    {onClick: () => setIsClicked(true)}, //상태 변경에 따라 재랜더링
    isClicked ? 'Clicked' : 'Click here!'
  );
}
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
// ReactDOM 객체의 render()함수로 리액트 컴포넌트를 DOM컨테이너에 랜더링 하는 코드 
root.render(React.createElement(MyButton));

// 리액트 개발 환경이 세팅된 리액트 프로젝트를 자동으로 생성해주는 Create React App (CRA)이라는 패키지를 사용할 예정!
// CRA는 npx 명령어를 이용해서 실행
// npx(eXecute Npm package binaries):npm 패키지를 설치하고 곧바로 실행까지
// 사용법: npx create-react-app <your-project-name> 
// 컨트롤 + 물결 누르면 터미널창 cd 띄고 폴더명 엔터 누르면 이동
// npx create-react-app (프로젝트명:my-app) 엔터 그리고 y 누르면 설치  (명령어 컨트롤c 는 취소)
// npm install 해줘야 다른 라이브러리를 사용가능 node_modules 가 안올라가기 때문에 (용량이크고 파일 크기가 커지기때문에 안올림)
