import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';
import rootReducer from './rootReducer';

const persistConfig = {
	key: 'root',
	storage: storageSession,
	stateReconciler: hardSet,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export const persistor = persistStore(store);
