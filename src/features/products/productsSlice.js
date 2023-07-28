import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase/supabase';

const initialState = {
	isLoading: false,
	products: [],
};

export const getAllProducts = createAsyncThunk(
	'products/getAllProducts',
	async (_, thunkAPI) => {
		let { data: products, error } = await supabase.from('products').select('*');
		if (error) return thunkAPI.rejectWithValue(error.message);
		return products;
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllProducts.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.products = payload;
			})
			.addCase(getAllProducts.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.error(payload);
			});
	},
});

export default productsSlice.reducer;
