import { useState } from "react";

function ReactBlog() {

  const post = '강남 우동 맛집';
  const [글제목, 글제목변경] = useState(['남자코드 추천', '강남 우동 맛집', '파이썬 독학']);
  const [like, likePlus] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy1 = [...글제목.sort()];
        글제목변경(copy1);
      }}>가나다순 정렬</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천'
        글제목변경(copy);
      }}>글수정</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { likePlus(like + 1) }}>👍좋아요</span> {like} </h4>
        <p>1월 25일 방행</p>
      </div>


      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>1월 25일 방행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>1월 25일 방행</p>
      </div>
      <Modal/>

    </div>

  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}


export default ReactBlog;


