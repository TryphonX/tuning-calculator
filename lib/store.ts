import { configureStore } from '@reduxjs/toolkit/react';
import calculatorSliceReducer from './features/calculator/calculatorSlice';

export const appStore = configureStore({
	reducer: {
		calculator: calculatorSliceReducer,
	},
});

export type AppStore = typeof appStore;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
