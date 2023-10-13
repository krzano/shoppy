import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase/supabase';
import { sortValues } from '../../utils/filterValues';

const initialFilters = {
	search: '',
	company: 'all',
	category: 'all',
	sortBy: 'name-az',
};

const initialState = {
	isLoading: false,
	isError: false,
	featuredProducts: [],
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

export const getFeaturedProducts = createAsyncThunk(
	'products/getFeaturedProducts',
	async (_, thunkAPI) => {
		const { data: products, error } = await supabase
			.from('products')
			.select('*')
			.eq('featured', true);
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
			if (state.allProducts.length < 1) return;
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
			if (sortBy === sortValues.NAME_AZ) {
				tempProducts = tempProducts.sort((a, b) => {
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();
					if (nameA < nameB) return -1;
					if (nameA > nameB) return 1;
					return 0;
				});
			}
			if (sortBy === sortValues.NAME_ZA) {
				tempProducts = tempProducts.sort((a, b) => {
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();
					if (nameA > nameB) return -1;
					if (nameA < nameB) return 1;
					return 0;
				});
			}
			if (sortBy === sortValues.PRICE_LOWEST) {
				tempProducts = tempProducts.sort((a, b) => {
					return a.price - b.price;
				});
			}
			if (sortBy === sortValues.PRICE_HIGHEST) {
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
				state.filters = initialFilters;
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
			})
			.addCase(getFeaturedProducts.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(getFeaturedProducts.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.featuredProducts = payload;
			})
			.addCase(getFeaturedProducts.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.isError = true;
				console.error(payload);
			});
	},
});

export default productsSlice.reducer;

export const {
	clearFilters,
	updateFilters,
	searchProducts,
	filterProducts,
	sortProducts,
} = productsSlice.actions;
