// 리액트 다운 순서
// Node.js다운 받기 
// 열린 명령창 혹은 터미널에 "npm -v"입력하여 잘 설치되었는지 확인.
// create-react-app 설치 -> npm install -g create-react-app
// create-react-app 설치 확인-> create-react-app -V
// ----------------------------------------------------------------

// 오류 발생시 !!
// 'react-scripts'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.
// 첫 다운로드시 npm start가 안된다면 npm update를 해보자 
// ----------------------------------------------------------------

// 새로운 프로젝트 만들기!! - 새로운 리액트
// 컨트롤 ` 로 터미널 창 만들고 -> 새로운 터미널 추가 + 누르면 댐
// 경로 11_react 와서 npx해주면 댐
// npx create-react-app my-post
// 
// ----------------------------------------------------------------

// 처음 시작해서 localhost3000 연결 안될때
// 경로 지정하기 컨트롤 ` 누르고 cd (프로젝트 경로)하면 경로지정
// 경로지정 후 npm start 를 해주면 리액트 사용준비 완료!

// ----------------------------------------------------------------

// 컴포넌트를 불러올때 자동완성으로 입력하면 위에 import Comment from "경로";
// 맨 아래는 내보내야하니까 export default CommentList; 
// porps 기본 구성
// function 컴포넌트이름(props) {
//   return(

//   );
// }
// ----------------------------------------------------------------

// 자바스크립트는 {} 안에 써주면 됌
// useState 기본 구성
// const [count,setCount] = useState(0);
// 관례 [count,setCount] 이면 이름 카멜케이스로 맞춰야함 [sangmin,setSangmin] 이런식으로 함수명 지으면 카멜케이스 set변수명



// ----------------------------------------------------------------
// 화살표 함수 중괄호 에러 부분,,,

// 에러 없음!!
// const increaseCount = () => {
//   setCount((count) => count + 1 );
// };
// const decreaseCount = () => {
//   setCount((count) => Math.max(count - 1, 0) );
// };

// 에러뜸
// const increaseCount = () => {
//   setCount((count) =>{ count + 1 } );
// };
// const decreaseCount = () => {
//   setCount((count) => {Math.max(count - 1, 0)} );
// };

// 이유 리턴때문.. 중괄호 사용시 리턴을 적어줘야한다 아니면 중괄호 아예 안쓰거나

// const increaseCount = () => {
//   setCount((count) => {return count + 1} );
// };
// const decreaseCount = () => {
//   setCount((count) => { return Math.max(count - 1, 0)} );
// };


// 에러 안남...

// ----------------------------------------------------------------

// 언어 바꾸라고하면 index.html 파일가서 언어 ko로 변경하면 됨

// ----------------------------------------------------------------
