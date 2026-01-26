import {ShoppingBagState} from "@/types";
import {createSlice} from "@reduxjs/toolkit";

// Initial state of the shopping bag
const initialState: ShoppingBagState = {
  items: [],
  notification: false,
}

const shoppingBagSlice = createSlice({
  name: "shoppingBag", // Name of the slice
  initialState, // Initial state
  reducers: {
    addToShoppingBag(state, action) {
      const { productId, quantity } = action.payload;

      // Check if the product already exists in the shopping bag
      const existingProduct = state.items.find((item) => item.productId === productId);
      
      if (existingProduct) {
        existingProduct.quantity += quantity; // Update quantity if it exists
      } else {
        state.items.push({ productId, quantity }); // Add new product if it doesn't exist
      }

    }
  }
})

// Exporting the action to add items to the shopping bag
export const { 
  addToShoppingBag 
} = shoppingBagSlice.actions;

export default shoppingBagSlice.reducer;