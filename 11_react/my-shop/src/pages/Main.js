import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";


import yonexImg from "../images/yonex.jpg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
const MainBackground = styled.div`
height: 500px;
background-image: url(${yonexImg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;
function Main(props) {
  const dispatch = useDispatch();
  // 처음 마운팅 됐을때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 데이터를 요청했다고 가정
    // ... api call ...
    dispatch();
  }, []);

  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground />
        {/* <img src={yonexImg} /> */}
      </section>

      {/* 상품 목록 섹션 */}
      <section>
        <Container>
          <Row>
            <Col md={4}>
              <img src='https://img.animalplanet.co.kr/news/2019/08/27/700/5a4ynu8w96mao3z1gfh3.jpg' width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src='https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/201902/25/dcinside/20190225114239762asdy.jpg' width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src='https://mblogthumb-phinf.pstatic.net/MjAxOTAxMDVfODAg/MDAxNTQ2Njk4NTA5MTQ0.bTmTxzZ7AsA35_gHfj8mKcTZlk0T6jhvV47Ya0hc2vgg.ZLC5MuC8ci9xAHLdYw2x9Elj1q6ps1V7ThdyCPCr--og.JPEG.mnluck/IMG_6215.JPG?type=w800' width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Main;