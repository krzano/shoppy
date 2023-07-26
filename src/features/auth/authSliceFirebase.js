import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	currentUser: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		updateUser: (state, { payload }) => {
			state.currentUser = payload;
		},
	},
});

export default authSlice.reducer;
export const { updateUser } = authSlice.actions;