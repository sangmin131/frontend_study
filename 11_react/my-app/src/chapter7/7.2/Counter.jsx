import { useState } from "react";

function Counter(props) {
  // state를 사용해서 값이 바뀔때마다 재런더링이 되도록 하겠다.
  const [count,setCount] = useState(0); // 초기값 으로 0
  // userState()의 결과로 배열이 반환됨 -> [0, set함수]
  // 관례 [count,setCount] 이면 이름 카멜케이스로 맞춰야함 [sangmin,setSangmin] 이런식으로 함수명 지으면 카멜케이스 set변수명
  // 첫 번째 요소는 현재 변수를 의미하고, 두 번째 요소는 해당 변수를 갱신해주는 함수
  // 배열의 구조 분해 할당을 상ㅇ하여 변수 선언 및 할당


  // 만약 state 미사용시

  let wrongCount = 0;

  return(
    <div>
      {/* State 사용 */}
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => {setCount(count + 1);}}>클릭</button>


      {/* State 미사용 */}
      <p>총 {wrongCount}번 클릭했습니다.</p>
      <button onClick={() => {
        wrongCount++;
        console.log(wrongCount);
      }}>클릭(잘못된 방법)</button>

    </div>
  );
}

export default Counter;