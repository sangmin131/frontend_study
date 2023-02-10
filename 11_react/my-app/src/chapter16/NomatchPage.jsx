import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NomatchPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 Not Found🙂</h1>
      <button type='button' onClick={()=>{ navigate('/');}}>메인으로</button>
    </div>
  );
}

