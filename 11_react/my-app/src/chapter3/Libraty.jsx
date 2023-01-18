import Book from "./Book";

function Libraty(props) {
  return(
    <div>
      <Book name="모던 자바스크립트 딥 다이브" numOfPage={300}/>
      <Book name="처음 만난 리액트" numOfPage={400}/>
      <Book name="리액트를 다루는 기술" numOfPage={500}/>
    </div>
  );
}
// Libraty 컴포넌트는 총3개의 Book컴포넌트를 랜더링
export default Libraty;