import React, { useEffect } from 'react';
import {Button, Col, Container, Row } from 'react-bootstrap';
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import yonexImg from "../images/yonex.jpg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { getAllProducts } from '../features/product/productSlice';
import ProductListItem from '../components/ProductListItem';
const MainBackground = styled.div`
height: 500px;
background-image: url(${yonexImg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;
function Main(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  console.log(productList);
  // 처음 마운팅 됐을때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 데이터를 요청했다고 가정
    // ... api call ...
    dispatch(getAllProducts(data));
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
            {/* <Col md={4}>
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
            </Col> */}

            {/* Quiz1: 반복적인 상품 목록 아이템 ProductListItem 컴포넌트화 시키기 */}
            {/* Quiz2: productList 배열을 반복하며 ProductListItem 렌더링*/}
            {/* Quiz3: 상품 정보를 props를 넘겨서 데이터 바인딩 */}
            {productList.map((product) => {
              console.log(product);
              return <ProductListItem key={product.id} product={product}  />;
            })}
            
            
          </Row>
        </Container>

        {/* 상품 더보기 */}
        <Button variant="secondary" className="mb-4"
        onClick={() => {
          axios.get('http://localhost:4000/products')
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.error(error);
            })
        }}
        
        >
          더보기
          </Button>
      </section>
    </>
  );
}

export default Main;


// json-server
// 실무와 비슷한 느낌으로 하기위해 가짜 API 서버를 만듦
// json파일 하나만 있으면 연습용 서버를 쉽게 구성 가능
// npx json-server ./src/data2.json --port 4000