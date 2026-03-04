import {configureStore} from '@reduxjs/toolkit';
import shoppingBagReducer from './shoppingBag';

// Reducers
const store = configureStore({
	// object with all reducers
	reducer: {
		// shoppingBagReducer is function which manages state of shopping bag
		shoppingBag: shoppingBagReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
