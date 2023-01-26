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



function LoginControl() {
  const [isLoggedIn, setIsLoggenIn] = useState(false);
  
  const handleLoginClick = () => {
    setIsLoggenIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggenIn(false);
  };
let button;
// button 변수에 컴포넌트 대입(결과적으로는 리액트 엘리먼트가 저장됨)
if (isLoggedIn){
  button = <LogoutButton onClick={handleLogoutClick} />;
}else{
  button = <LoginButton onClick={handleLoginClick} />;

}
  return (
<div>
  <Greeting isLoggedIn = {isLoggedIn} />
  {button}
</div>
  );
}

export default LoginControl;