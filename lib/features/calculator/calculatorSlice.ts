import {
	Engine,
	Method,
	SelectedPart,
	TuningPartName,
} from '@/@types/calculator';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface CalculatorState {
	currentEngine: Engine | null;
	selectedParts: SelectedPart[];
	locked: boolean;
	currentStep: number;
	method: Method;
}

const initialState: CalculatorState = {
	currentEngine: null,
	selectedParts: [],
	locked: false,
	currentStep: 0,
	method: 'auto',
};

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		updateEngine: (state, action: PayloadAction<Engine | null>) => {
			state.currentEngine = action.payload;
			state.selectedParts = initialState.selectedParts;
			state.locked = initialState.locked;
		},
		toggleSelectedPart: (state, action: PayloadAction<SelectedPart>) => {
			const part = action.payload;
			const existingPart = state.selectedParts.find(
				(p) => p.name === part.name,
			);

			if (existingPart) {
				state.selectedParts = state.selectedParts.filter(
					(p) => p.name !== part.name,
				);
			} else {
				state.selectedParts = [...state.selectedParts, part];
			}
		},
		setPartMissing: (state, action: PayloadAction<TuningPartName>) => {
			const part = state.currentEngine?.compatibleParts.find(
				(part) => part.name === action.payload,
			);
			if (part) {
				part.missing = true;
			}
		},
		updateSelectedParts: (state, action: PayloadAction<SelectedPart[]>) => {
			state.selectedParts = action.payload;
		},
		unlock: (state) => {
			state.locked = false;
		},
		nextStep: (state) => {
			state.currentStep += 1;
		},
		prevStep: (state) => {
			state.currentStep = Math.max(state.currentStep - 1, 0);
		},
		setMethod: (state, action: PayloadAction<Method>) => {
			state.method = action.payload;
		},
		resetCalculatorState: (state) => {
			state.currentEngine = initialState.currentEngine;
			state.selectedParts = initialState.selectedParts;
			state.locked = initialState.locked;
			state.currentStep = initialState.currentStep;
			state.method = initialState.method;
		},
	},
});

export const {
	updateEngine,
	toggleSelectedPart,
	setPartMissing,
	updateSelectedParts,
	unlock,
	nextStep,
	prevStep,
	setMethod,
	resetCalculatorState,
} = calculatorSlice.actions;

export const selectCalculator = (state: RootState) => state.calculator;
export const selectCurrentEngine = (state: RootState) =>
	state.calculator.currentEngine;
export const selectSelectedParts = (state: RootState) =>
	state.calculator.selectedParts;
export const selectLocked = (state: RootState) => state.calculator.locked;
export const selectCurrentStep = (state: RootState) =>
	state.calculator.currentStep;

export default calculatorSlice.reducer;
