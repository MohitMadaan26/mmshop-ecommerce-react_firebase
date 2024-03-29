import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderHistory: [],
  totalOrderAmount: null,
};

const orderReducer = createSlice({
  name: "orders",
  initialState,
  reducers: {
    STORE_ORDERS: (state, action) => {
      state.orderHistory = action.payload;
    },
    CALC_TOTAL_ORDER_AMOUNT: (state, action) => {
      const array = [];

      state.orderHistory.map((item) => {
        const { orderAmount } = item;

        array.push(orderAmount);
      });
      const totalAmount = array.length > 0 ? array.reduce((a, b) => a + b) : 0;

      state.totalOrderAmount = totalAmount;
    },
  },
});

export const { STORE_ORDERS, CALC_TOTAL_ORDER_AMOUNT } = orderReducer.actions;
export const selectOrderHistory = (state) => state.orderReducer.orderHistory;
export const selectTotalOrderAmount = (state) =>
  state.orderReducer.totalOrderAmount;

export default orderReducer.reducer;
