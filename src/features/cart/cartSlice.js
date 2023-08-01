import { createSlice } from '@reduxjs/toolkit';

const newCartItem = {
	id: '',
	amount: '',
	company: '',
	color: '',
	price: 0,
	stock: 0,
	image: '',
};

const initialState = {
	cartItems: [],
	totalAmount: 0,
	totalPrice: 0,
	shippingFee: 1999,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			const { id, amount, company, color, price, stock, image } = payload;
			state.cartItems = state.cartItems.push({ amount, product });
		},
		removeFromCart: () => {},
		increaseItemAmount: () => {},
		decreaseItemAmount: () => {},
	},
});

export default cartSlice.reducer;

export const {
	addToCart,
	removeFromCart,
	increaseItemAmount,
	decreaseItemAmount,
} = cartSlice.actions;
