// js
// 자바스크립트 코드는{} 안에 써주면 됌


// porps 기본 구성

// function 컴포넌트이름(props) {
//   return(

//   );
// }


// useState 기본 구성

// const [count,setCount] = useState(0);
// 관례 [count,setCount] 이면 이름 카멜케이스로 맞춰야함 [sangmin,setSangmin] 이런식으로 함수명 지으면 카멜케이스 set변수명
// [이름 , 바꿀State이름]
// {/* <h4>{글제목[0]} <span onClick={() => {바꿀State이름(이름 + 1)}}>👍좋아요</span> {like} </h4> */}
// 바꿀State이름(이름 + 1) 이런식으로 해줘야함 


// 개체, 배열 수정해야하면 복사본 만들어서 수정해야함
// ex) const english = [a, b, c];
// const copyEn = [...english];
// copyEn[0] = 'aa';
// console.log(copyEn); 결과 -> ['aa', 'b', 'c']

