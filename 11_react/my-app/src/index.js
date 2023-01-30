import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropUse from './chapter5/5.3/PropUse';
import CommentList from './chapter5/CommentList';
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Counter';
import CounterEffect from './chapter7/7.3/CounterEffect';
import SetStateMerge from './chapter7/7.2/SetStateMerge';
import EffectSummary from './chapter7/7.3/EffectSummary';
import EffectContainer from './chapter7/7.3/EffectContainer';
import TimerContainer from './chapter7/7.3/TimerContainer';
import HeavyCalculator from './chapter7/7.4/HeavyCalculator';
import ParentComponent from './chapter7/7.5/ParentComponent';
import TextInputWithFocusButton from './chapter7/7.6/TextInputWithFocusButton';
import ComponentVariable from './chapter7/7.6/ComponentVariable';
import InputContainer from './chapter7/7.8/ex2/InputContainer';
import ReactBlog from './test/App1';
import Accommodate from './chapter7/7.8/ex2/Accommodate';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';
import Mailbox from './chapter9/9.3/Mailbox';
import LoginControlRefactoring from './chapter9/9.3/LoginControlRefactoring';
import MainPage from './chapter9/9.4/MainPage';
import LandingPage from './chapter9/LandingPage';
import Reservation from './chapter11/11.4/Reservation';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );

// 3장 예제
// root.render(
//   // <JsxUse />
//   <Library />
// );

// 4장 예제
// 1초 마다 Clock 컴포넌트를 root div에 렌더링 하는 코드
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);

// 5장 예제
// root.render(
//   // <PropUse />
//   <CommentList />
// );

// 6장 예제
// root.render(
//   <NotificationList />
// );

// 7장 예제
// root.render(
// //   // <Counter />
// //   // <CounterEffect />
// //   // <SetStateMerge />
//   <EffectSummary />
// //   // <EffectContainer />
//   // <TimerContainer />
// //   // <HeavyCalculator />
// //   // <ParentComponent />
// //   // <TextInputWithFocusButton />
// //   // <ComponentVariable />
// //   // <InputContainer />
// //   // <ReactBlog />
// //   // <Accommodate />
// );

// // // 8장 예제
// // root.render(
// //   // <Toggle />
// //   // <MyButton />
// //   // <ConfirmButton />

// // );
// // 9장 예제
// // const messages = ['React', 'Re:React', 'Re:Re:React'];
// // root.render(
// // // {/* <Greeting isLoggedIn={true} /> */}
// // // {/* <LoginControl /> */}
// // <Mailbox unreadMessages = {messages}/> 
// // // {/* <LoginControlRefactoring /> */}
// // // {/* <MainPage /> */}
// // // {/* <LandingPage />  */}
// // );
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();


// 11장

root.render(
  <Reservation />
);
// 이해 안되는거

// 7.3 FriendStatus 전부 이해안됌


// 7.3 EffectSummary 에서 e

// 값이 변경되면 화면을 새로고침하기위해 state 씀

// <p>이름: {name}</p>
// e.target.value e.target <- input 태그  value 가 값을 입력
// <input type="text" value={name} onChange={e => setName(e.target.value)} />
// 인풋에 값이 들어오면 value={name}은 이름으로 전달 되고 재랜더링하기위해  ? onChange 역활  input 태그의 포커스를 벗어났을때 (즉, 입력이 끝났을때) 발생하는 이벤트이다.
// e 는 매개변수자리에 들어가는데 어떻게 적용되는지 궁금
