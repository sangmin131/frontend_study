import { useState } from "react";
import Counter from "./Counter";

function CouterContainer() {
  const [count, setCount] = useState(0); // 초기값 0

  const handleCount = () => {
    setCount(count + 1);
  };

  return (  
    <>
      <Counter count={count} handleCount={handleCount} />
      <Counter count={count} handleCount={handleCount} />
    </>
  );
}

export default CouterContainer;