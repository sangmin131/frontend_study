import { useState } from "react";

// useCounter() 커스텀 훅
// initialValue 라른 초기 카운트 값을 받아서 count라는 이름의 state생성 시 초기값으로 제공
// 카운트 증가 및 감소를 편리하게 할 수 있도록 함수를 제공하는 훅
// 어떤 함수 컴포넌트에서든지 카운트 기능을 쉽게 사용
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => {
    setCount((count) => {return count + 1} );
  };
  const decreaseCount = () => {
    setCount((count) => { return Math.max(count - 1, 0)} );
  };

  return[count, increaseCount, decreaseCount];
}

export default useCounter;