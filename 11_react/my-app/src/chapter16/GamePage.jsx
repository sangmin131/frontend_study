import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function GamePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>게임 페이지</h1>
      <ul>
        <li>
          <Link to="/games/hot">인기게임</Link>
        </li>
        <li>
          <Link to="/games/new">신규게임</Link>
        </li>
      </ul>
      {/* Nested route의 자식 엘리먼트를 보여주는 역활 */}
      <Outlet />
      <button type='button' onClick={()=>{ navigate('/');}}>메인페이지</button>
    </div>
  );
}

