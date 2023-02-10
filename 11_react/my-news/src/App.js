import './App.css';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import {useState, useCallback} from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import NewsPage from './Pages/NewsPage';


// state로 관리시
// function App() {
//   // 현재 선택한 category 상태관리
//   const [category, setCategory] = useState('all');
//   const handleSelect = useCallback((categoryValue)=>{
//     setCategory(categoryValue);
//   },[]);
//   return (
//     <>
//     <Categories category={category} onSelect = {handleSelect}/>
//     <NewsList category={category}/>
//     </>
//   );
// }
// 라우팅 + URL 파라미터 적용시

function App() {
  // 현재 선택한 category 상태관리

  return (
  <Routes>
    {/* ?는 category 값이 선택적이라는 의미 */}
    {/* 즉, 있을 수도 있고, 없을 수도 있다는 뜻 */}
    <Route path="/:category?" element={<NewsPage/>}/>
  </Routes>
  );
}
export default App;
