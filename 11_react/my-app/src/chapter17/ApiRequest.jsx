import React, { useState } from 'react';
import axios from "axios";
function ApiRequest(props) {
  // 서버에서 가져온 데이터를 담을 state
  const [data, setData] = useState(null);

  // 1.Promise/then
  // const handleRequestById = (id) => {
  //   // jsonplaceholder 에서 제공하는 테스트용 API호출
  //   axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
  //   .then((response) => {
  //     console.log(response);
  //     setData(response.data); //axios 라이브러리가 JSON -> objext/array 변환작업을 자동으로 해줌
  //   })
  //   .catch((error) => { //요청 실패한 경우 에러 핸들링
  //     console.error(error);
  //   });
  // };


  // 2. async/await
  
  const handleRequestById = async (id) => {
    try {
      // jsonplaceholder 에서 제공하는 테스트용 API호출
    const response =  await axios.get(`https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth?serviceKey=huPU3BYM7%2Bq16HpG2N9YeYySORQ1Fz8L1pW%2F2B5Hko8QNnDh4D6MhmncKy%2FUS8PEDyEbjAYy5pki1R30V6xd%2Bw%3D%3D&returnType=json&numOfRows=100&pageNo=1&searchDate=2023-02-10`);
    // const response =  await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
    console.log(response.data);
    console.log(response.data.response.body.items[0].frcstOneCn);
    setData(response.data.response.body.items[0]);//axios 라이브러리가 JSON -> objext/array 변환작업을 자동으로 해줌
    // setData(response.data);//axios 라이브러리가 JSON -> objext/array 변환작업을 자동으로 해줌
      
    } catch (error) {
  console.error(error);
      
    }
    
  };


  return (
    <div>
      <div>
        <button type='button' onClick={()=>{handleRequestById(100)}}>불러오기</button>
      </div>
      {data && 
      <>
      <textarea cols={70} rows={8} value={JSON.stringify(data, null, 2)} readOnly/>
      {/* <p>{data.title}</p>
      <img src={data.thumbnailUrl} alt="thumbnail" /> */}
      <p>{data.frcstOneDt}</p>
      <p>{data.frcstOneCn}</p>
      <p>{data.frcstTwoDt}</p>
      <p>{data.frcstTwoCn}</p>
      </>}
    </div>
  );
}

export default ApiRequest;

// 자바 스크립트를 이요하여 서버 쪽 데이터를 필요로 할 때에는 
// Ajax 기법을 상요하여 서버의 API를 호출 함으로 써 데이터를 수신 
// Ajax : 비동기 자바스크립트와 XML 

// Ajax 쓰는 다양한 방법
// 1. XMLHttpRequest(XHR) 객체 -잘안씀
// 2. fetch() 함수 - ES6차 HTTP 요청 함수
// 3. axios - 외부 라이브러리 (제일 많이 씀)

// Axios 라이브러리 설치
// npm install axios
// 기본 사용법
// import 후 axios.get('url').then();