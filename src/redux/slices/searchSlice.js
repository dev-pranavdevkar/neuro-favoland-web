import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const statuses = Object.freeze({
	IDEL: 'idel',
	ERROR: 'error',
	LOADING: 'loading',
});
const searchSlice = createSlice({
	name: 'search',
	initialState: {
		searchedProduct: [],
		status: statuses.IDEL,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(searchProduct.fulfilled, (state, action) => {
			state.searchedProduct = action.payload;
			state.status = statuses.IDEL;
		});
	},
});

export default searchSlice.reducer;

export const searchProduct = createAsyncThunk(
	'search/fetchData',
	async (id) => {
		const response = await fetch(`/api/search/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const searchProduct = await response.json();

		return searchProduct;
	}
);
