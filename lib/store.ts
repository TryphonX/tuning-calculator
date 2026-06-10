import { configureStore } from '@reduxjs/toolkit/react';
import autoGenSliceReducer from './features/autoGen/autoGenSlice';
import calculatorSliceReducer from './features/calculator/calculatorSlice';

export const appStore = configureStore({
	reducer: {
		calculator: calculatorSliceReducer,
		autoGen: autoGenSliceReducer,
	},
});

export type AppStore = typeof appStore;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
