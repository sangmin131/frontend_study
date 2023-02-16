import { createSlice } from "@reduxjs/toolkit";


// 장바구니 정보를 담을 slice를 만듦
const initialState = {
  cartList: [
    // {
    //   id: "1",
    //   title: "Arcsaber 11 Pro",
    //   price: 299000,
    //   count: 2
    // },
    // {
    //   id: "2",
    //   title: "Aerus Z",
    //   price: 199000,
    //   count: 1
    // }
  ]
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 장바구니 수량을 변경하는 리듀서 함수 만들기 
    // Quiz: 상품의 id값을받아서 해당 사움의 수량을 1씩 증가/감소
    increaseCount: (state, action) => {
      const targetItem = state.cartList.find((cart) => cart.id === action.payload);
      targetItem.count += 1;
    },
    decreaseCount: (state, { payload: id }) => {
      const targetItem = state.cartList.find((cart) => cart.id === id);
      targetItem.count -= 1;
    },
    // 장바구니에 아이템을 추가하는 리듀서 만들기
    // 이미 들어있는 상품이면 카운트만 증가
    // 장바구니에 없는 상품이면 새롭게 추가
    addItemToCart:(state, { payload: item }) => {
      // item = {id, title, price, count}를 받아옴
      const targetItem = state.cartList.find((cart) => cart.id === item.id);
      if(targetItem){
        targetItem.count += item.count;
      }else{
        state.cartList.push(item);
      }
      
      
    },
    // Quiz: 장바구니에서 삭제
    removeItemFromCart: (state, {payload:id}) => {
      const targetIndex = state.cartList.findIndex((cart) => cart.id === id);
      state.cartList.splice(targetIndex, 1);
    }

  }
});
export const { increaseCount, decreaseCount, addItemToCart, removeItemFromCart  } = cartSlice.actions;
export const slectCartList = state => state.cart.cartList;

export default cartSlice.reducer;