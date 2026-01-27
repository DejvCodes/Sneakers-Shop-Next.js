import {ShoppingBagState} from '@/types';
import {createSlice} from '@reduxjs/toolkit';

// initial state of the shopping bag
const initialState: ShoppingBagState = {
	items: [],
	notification: false,
}

const shoppingBagSlice = createSlice({
	name: 'shoppingBag', // name of the slice
	initialState, // initial state
	reducers: {
		addToShoppingBag(state, action) {
			const { productId, quantity } = action.payload;

			// check if the product already exists in the shopping bag
			const existingProduct = state.items.find((item) => item.productId === productId);

			if (existingProduct) {
				existingProduct.quantity += quantity; // update quantity if it exists
			} else {
				state.items.push({ productId, quantity }); // add new product if it doesn't exist
			}
			// console.log(current(state.items));
		},
		showNotification(state) {
			state.notification = true; // show notification
		},
		hideNotification(state) {
			state.notification = false; // hide notification
		}
	}
})

// exporting the action to add items to the shopping bag
export const {
	addToShoppingBag,
	showNotification,
	hideNotification
} = shoppingBagSlice.actions;

export default shoppingBagSlice.reducer;
