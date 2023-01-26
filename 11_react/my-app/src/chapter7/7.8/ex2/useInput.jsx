import { useState } from "react";

function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    alert(inputValue);
    setInputValue('');
  }

  return [inputValue, handleChange, handleSubmit];
}

export default useInput;