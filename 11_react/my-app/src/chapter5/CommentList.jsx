import Comment from "./Comment";

// 댓글 데이터를 별도의 객체로 분리하고 반복 가능한 배열에 담기
const comments = [
  {
    name:'지존검사',
    comment:'안녕하세요 마법사입니다.'
  },
  {
    name:'파워궁수',
    comment:'안녕하세요 저도 마법사입니다.'
  },
  {
    name:'흑마법사',
    comment:'안녕하세요 봉사하러온 힐러 입니다.'
  },
  
];

function CommentList(Props) {

  return(
<div>
  {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map()함수를 사용 
  (map()은 배열 안에 있는 각 요소를 변환하여 새로운 배열을 만듦)
  앞으로 리액트에서 동적인 배열을 렌더링해야 할 때에는 map() 함수를 사용하여
  일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 됨  */}

  {comments.map((comment, index) => {
    return(
      <Comment key={index} name={comment.name} comment={comment.comment}/>
    );
  })}
</div>
  );
};

export default CommentList;