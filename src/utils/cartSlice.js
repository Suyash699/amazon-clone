import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); //payload is the data which will be received after action is dispatched, which will be pushed into state variable
    }, //state is initial state and action is the action that will be dispatched

    removeItem: (state, action) =>{
      state.items.pop();
    },

    clearCart: (state, action)=>{
        state.items = [];    //This CBF does not return anything, just takes a state and modifies it.
    }
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;