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

// map
// map(요소, 인덱스, 배열) --> map(요소) 

// map(요소, 인덱스, 배열) --> map(인덱스) 

// map(요소, 인덱스, 배열) --> map(배열) 
const arr = [1, 2, 3];

const rel = arr.map((i) => i*2 );

console.log(rel); // [2, 4, 6]


   {/* {posts.map((posts의 요소하나하나 이름 아무거나해도됌 )=>{})} */}
  //  {posts.map((post )=>{
  //   return <PostListItem key = {post.id}
  //   post = {post}
  //    onClick = {()=>{onClickitem(post);}}/>
  // })}

1
//splice
copyTodos.splice(idx, 1); //인덱스를 넣어주고 1개를 삭제하겠다

// filter('테스트함수'); 기존의 배열은 변경하지 않고 특정조건을 만족하는 요소들만 따로 호출하여 새로운 배열을 만든다.
// 테스트 함수 에서는 true 또는 false 반환해야 하며, 여기서 true를 반환하는 경우만 새로운 배열에 포함됨
todos.filter((todo)=> todo.id !== id);