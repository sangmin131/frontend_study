// 문제.1
// props에서 function Header(props) <- 매개변수 자리에 props 들어가는게 사용할려는 함수에 적는건지 아니면
// 이 porps를 쓰라고 표시하라고 적어두는건지..
// function Header(props){
// props.title
// }
// 해결 
// 자식 컴포넌트에서 Header(props)로 받아서 사용가능
// <Header props.title = '어쩌구'> 이라고 불러서 어쩌구 변경가능

// 문제2. 자리 바꾸기 github
// 자리 바꾸고 push가 안될때 인증 다 하고 올릴때 1번 해줌
// git push orugin feature/login