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
		changeQuantity(state, action) {
			const { productId, quantity } = action.payload;

			// find the product in the shopping bag
			const existingProduct = state.items.find((item) => item.productId === productId);

			if (existingProduct && quantity > 0) {
				existingProduct.quantity = quantity; // update quantity
			} else {
				// remove the product if quantity is zero
				state.items = state.items.filter((item) => item.productId !== productId);
			}
		},
		deleteProduct(state, action) {
			const { productId } = action.payload;
			// remove the product from the shopping bag
			state.items = state.items.filter((item) => item.productId !== productId);
		},
		showNotification(state) {
			state.notification = true; // show notification
		},
		hideNotification(state) {
			state.notification = false; // hide notification
		}
	}
})

// exporting actions
export const {
	addToShoppingBag,
	changeQuantity,
	deleteProduct,
	showNotification,
	hideNotification
} = shoppingBagSlice.actions;

export default shoppingBagSlice.reducer;
