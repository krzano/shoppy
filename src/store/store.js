import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import productsSlice from '../features/products/productsSlice';
import cartSlice from '../features/cart/cartSlice';

const store = configureStore({
	reducer: {
		auth: authSlice,
		products: productsSlice,
		cart: cartSlice,
	},
});

export default store;
