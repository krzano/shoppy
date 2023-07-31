import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase/supabase';

const initialFilters = {
	search: '',
	company: 'all',
	category: 'all',
	sortBy: 'name-az',
};

const initialState = {
	isLoading: false,
	//TODO: error handling in Products.jsx
	isError: false,
	allProducts: [],
	filteredProducts: [],
	filters: { ...initialFilters },
};

export const getAllProducts = createAsyncThunk(
	'products/getAllProducts',
	async (_, thunkAPI) => {
		const { data: products, error } = await supabase
			.from('products')
			.select('*');
		if (error) return thunkAPI.rejectWithValue(error.message);
		return products;
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		clearFilters: (state) => {
			state.filteredProducts = [...state.allProducts];
			state.filters = { ...initialFilters };
		},
		updateFilters: (state, { payload }) => {
			const { name, value } = payload;
			state.filters[name] = value;
		},
		filterProducts: (state) => {
			const {
				allProducts,
				filters: { search, category, company, sortBy },
			} = state;
			let tempProducts = allProducts;
			if (search) {
				tempProducts = tempProducts.filter((product) => {
					return product.name.toLowerCase().includes(search.toLowerCase());
				});
			}
			if (category !== 'all') {
				tempProducts = tempProducts.filter((product) => {
					return product.category === category;
				});
			}
			if (company !== 'all') {
				tempProducts = tempProducts.filter((product) => {
					return product.company === company;
				});
			}
			if (sortBy === 'name-az') {
				tempProducts = tempProducts.sort((a, b) => {
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();
					if (nameA < nameB) return -1;
					if (nameA > nameB) return 1;
					return 0;
				});
			}
			if (sortBy === 'name-za') {
				tempProducts = tempProducts.sort((a, b) => {
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();
					if (nameA > nameB) return -1;
					if (nameA < nameB) return 1;
					return 0;
				});
			}
			if (sortBy === 'price-lowest') {
				tempProducts = tempProducts.sort((a, b) => {
					return a.price - b.price;
				});
			}
			if (sortBy === 'price-highest') {
				tempProducts = tempProducts.sort((a, b) => {
					return b.price - a.price;
				});
			}
			state.filteredProducts = tempProducts;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(getAllProducts.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.allProducts = payload;
				state.filteredProducts = payload;
			})
			.addCase(getAllProducts.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.isError = true;
				console.error(payload);
			});
	},
});

export default productsSlice.reducer;

export const { clearFilters, updateFilters, filterProducts } =
	productsSlice.actions;
