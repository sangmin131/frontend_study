import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Libraty from './chapter3/Libraty';
import Clock from './chapter4/Clock';
import Profile from './chapter5/5.3/Profile';


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
root.render(
<Profile />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
