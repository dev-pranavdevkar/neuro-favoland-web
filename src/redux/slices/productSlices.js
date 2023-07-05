import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
const statuses = Object.freeze({
	IDEL: 'idel',
	ERROR: 'error',
	LOADING: 'loading',
});
const productSlice = createSlice({
	name: 'products',
	initialState: {
		allProducts: [],
		status: statuses.IDEL,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllProducts.pending, (state) => {
				state.status = statuses.LOADING;
			})
			.addCase(fetchAllProducts.fulfilled, (state, action) => {
				state.allProducts = action.payload;
				state.status = statuses.IDEL;
			})
			.addCase(fetchAllProducts.rejected, (state) => {
				state.status = statuses.ERROR;
			});
	},
});

export default productSlice.reducer;

export const fetchAllProducts = createAsyncThunk(
	'productts/fetchData',
	async () => {
		const response = await fetch("/api/products/allproducts", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const allProducts = await response.json();

		return allProducts;
	}
);
