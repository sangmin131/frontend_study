function UserGreeting() {
  return (
    <h1>😀Welcome back!</h1>
  );
}
function GuestGreeting() {
  return (
    <h1>😅Please sign up.</h1>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  // 로그인 여부에 따라 두 개의 컴포넌트를 선택적으로 보여줌
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;

}

export default Greeting;