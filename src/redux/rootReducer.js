import { combineReducers } from 'redux';

import productReducer from './slices/productSlices';
import searchReducer from './slices/searchSlice';

const rootReducer = combineReducers({
	productReducer,
	searchReducer,
});

export default rootReducer;
