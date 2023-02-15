import axios from "axios";
// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러곳에서 재사용할 수 있도록 함수로 만듦
export const getProducts = async () => {
  try {

    const response = await axios.get(`http://localhost:4000/products`);
    if (response.status === 200) { // 요청 시 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {// 서버가 죽었거나, 인터넷이 끊겻거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};
export const getProductsById = async (id) => {
  try {

    const response = await axios.get(`http://localhost:4000/products/${id}`);
    if (response.status === 200) { // 요청 시 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {// 서버가 죽었거나, 인터넷이 끊겻거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};


// 서버에 데이터 보내기

// export const addProduct = async (product) => {
//   try {

//     const response = await axios.post(`http://localhost:4000/product-add`, { product });
//     if (response.status === 200) { // 요청 시 200 OK 일때만 결과를 리턴
//       return response.data;
//     } else {
//       throw new Error(`api error: ${response.status} ${response.statusText}`);
//     }
//   } catch (error) {// 서버가 죽었거나, 인터넷이 끊겻거나, URL이 잘못됐을 때 등
//     console.error(error);
//     throw error;
//   }
// };

// reauest.body.product 
// --------------------------------------------------------------------------------------------------------------------------
// export const OrderProduct = async ({productId, orderCount}) => {
//   try {

//     const response = await axios.post(`http://localhost:4000/product-order`, { productId, orderCount });
//     if (response.status === 200) { // 요청 시 200 OK 일때만 결과를 리턴
//       return response.data;
//     } else {
//       throw new Error(`api error: ${response.status} ${response.statusText}`);
//     }
//   } catch (error) {// 서버가 죽었거나, 인터넷이 끊겻거나, URL이 잘못됐을 때 등
//     console.error(error);
//     throw error;
//   }
// };

// reauest.body.productId
// reauest.body.orderCount
