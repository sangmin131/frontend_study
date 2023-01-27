import { useState } from "react";
import Greeting from "../9.1/Greeting";

function LoginButton(props) {
  return(
    <button onClick={props.onClick}>
      😚Login
    </button>
  );
}
function LogoutButton(props) {
  return(
    <button onClick={props.onClick}>
      😂Logout
    </button>
  );
}



function LoginControlRefactoring() {
  const [isLoggedIn, setIsLoggenIn] = useState(false);
  
  const handleLoginClick = () => {
    setIsLoggenIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggenIn(false);
  };

  return (
<div>
  <Greeting isLoggedIn = {isLoggedIn} />
  {/* 삼항 연산자로 if-else 구문을 jsx내부에서 사용 */}
  {/* 조건에 따라 각기 다른 엘리먼트를 렌더링 하고 싶을 때 사용 */}
  {isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> :<LoginButton onClick={handleLoginClick} />}
</div>
  );
}

export default LoginControlRefactoring;