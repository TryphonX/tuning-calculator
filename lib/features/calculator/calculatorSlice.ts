import { Engine, SelectedPart, TuningSetup } from '@/@types/calculator';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface CalculatorState {
	currentEngine: Engine | null;
	selectedParts: SelectedPart[];
	locked: boolean;
	repairs: TuningSetup['repairs'] | undefined;
	currentStep: number;
}

const initialState: CalculatorState = {
	currentEngine: null,
	selectedParts: [],
	locked: false,
	repairs: undefined,
	currentStep: 0,
};

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		selectEngine: (state, action: PayloadAction<Engine | null>) => {
			state.currentEngine = action.payload;
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
		updateSelectedParts: (state, action: PayloadAction<SelectedPart[]>) => {
			state.selectedParts = action.payload;
		},
		unlock: (state) => {
			state.locked = false;
		},
		setRepairs: (
			state,
			action: PayloadAction<TuningSetup['repairs'] | undefined>,
		) => {
			state.repairs = action.payload;
			if (action.payload) {
				state.locked = true;
			}
		},
		nextStep: (state) => {
			state.currentStep += 1;
		},
		prevStep: (state) => {
			state.currentStep = Math.max(state.currentStep - 1, 0);
		},
	},
});

export const {
	selectEngine,
	toggleSelectedPart,
	updateSelectedParts,
	unlock,
	setRepairs,
	nextStep,
	prevStep,
} = calculatorSlice.actions;

export const selectCalculator = (state: RootState) => state.calculator;
export const selectCurrentEngine = (state: RootState) =>
	state.calculator.currentEngine;
export const selectSelectedParts = (state: RootState) =>
	state.calculator.selectedParts;
export const selectLocked = (state: RootState) => state.calculator.locked;
export const selectRepairs = (state: RootState) => state.calculator.repairs;
export const selectCurrentStep = (state: RootState) =>
	state.calculator.currentStep;

export default calculatorSlice.reducer;
