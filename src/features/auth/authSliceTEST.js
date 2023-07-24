import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase/supabase';
const initialState = {
	isLoading: false,
	user: null,
	isLoggedIn: false,
};

export const getUserSession = createAsyncThunk(
	'/auth/getUserSession',
	async (_, thunkAPI) => {
		const { data, error } = await supabase.auth.getSession();
		console.log(data, error);
		if (error) {
			console.error(error.message);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const loginUser = createAsyncThunk(
	'/auth/loginUser',
	async ({ email, password }, thunkAPI) => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
		if (error) {
			console.error(error.message);
			return thunkAPI.rejectWithValue(error.message);
		}
		return data;
	}
);
export const registerUser = createAsyncThunk(
	'/auth/registerUser',
	async ({ email, password }, thunkAPI) => {
		const { data, error } = await supabase.auth.signUp({
			email: email,
			password: password,
		});
		if (error) {
			console.error(error.message);
			return thunkAPI.rejectWithValue(error.message);
		}
		return data;
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		updateCurrentUser: (state, { payload }) => {
			console.log(payload);
			state.user = payload.user;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUserSession.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUserSession.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(getUserSession.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
				alert('You are logged in!');
			})
			.addCase(loginUser.rejected, (state) => {
				state.isLoading = false;
				alert('There was an error...');
			})
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
				alert('Account created!');
			})
			.addCase(registerUser.rejected, (state) => {
				state.isLoading = false;
				alert('There was an error...');
			});
	},
});

export default authSlice.reducer;
export const { updateCurrentUser } = authSlice.actions;
// const loginUser = async ({ email, password }) => {
// 	const { data, error } = await supabase.auth.signInWithPassword({
// 		email: email,
// 		password: password,
// 	});
// 	console.log('error', error);
// 	console.log('data', data);
// };
// const registerUser = async ({ email, password }) => {
// 	const { data, error } = await supabase.auth.signUp({
// 		email: email,
// 		password: password,
// 	});
// 	console.log('error', error);
// 	console.log('data', data);
// };

// const logoutUser = async () => {
// 	const logout = await supabase.auth.signOut();
// 	console.log(logout);
// };
