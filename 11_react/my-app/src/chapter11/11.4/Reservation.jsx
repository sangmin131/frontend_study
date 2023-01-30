import { useState } from "react";

function Reservation() {
  // 여러개의 입력 제어하기 => 여러개의 state선언
  const [breakfast, setBreakfast] = useState(false);
  const [numberOfGuests, setnumberOfGuests] = useState(2);
  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.checked);
  };
  const handleGuestsChange = (e) => {
    setnumberOfGuests(e.target.value);
  };
  const handleSubmit = () => {
    alert(`조식 여부 : ${breakfast}, 투숙객 수 : ${numberOfGuests}`);
  }
  
  return (
    <>
      <label>
        조식 여부:
        <input type="checkbox"
          // checked 속성은 checkbox랑 radio 타입에 존재하고 boolean타입의 값 
          checked={breakfast} 
          onChange={handleBreakfastChange}/>
          
      </label>
      <br />
      <label>
        투숙객 수:
        <input type="number"
        value={numberOfGuests}
        onChange={handleGuestsChange}
        />
      </label>
      <button type="button" onClick={handleSubmit}>제출</button>
    </>
  );
}

export default Reservation;