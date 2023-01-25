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

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );
// 3장 예제

// root.render(
//     // <JsxUse />
//     // <Libraty />
// );


// 4장 예제
// 1초마다 Clock 컴포넌트를 root div 에 렌더링 하는 코드 
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);

// 5장 예제 
// root.render(
// <CommentList />
//   );


// 6장 예제
// root.render(
// <NotificationList />
//   );


// 7장 예제
root.render(
  // <Counter />
  // <CounterEffect />
  // <SetStateMerge />
  // <EffectSummary />
  // <EffectContainer />
  // <TimerContainer />
  // <HeavyCalculator />
  // <ParentComponent />
  // <TextInputWithFocusButton />
  <ComponentVariable />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
