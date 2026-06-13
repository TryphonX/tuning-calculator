import { IntRange, ReplacementParts, TuningSetup } from '@/@types/calculator';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface AutoGenState {
	targetIncrease: IntRange<0, 100>;
	generatedSetup: TuningSetup | null;
	replacementParts: ReplacementParts;
	withReplacements: boolean;
}

const initialState: AutoGenState = {
	targetIncrease: 0,
	generatedSetup: null,
	replacementParts: {} as ReplacementParts,
	withReplacements: false,
};

export const autoGenSlice = createSlice({
	name: 'autoGen',
	initialState,
	reducers: {
		setTargetIncrease: (state, action: PayloadAction<IntRange<0, 100>>) => {
			state.targetIncrease = action.payload;
		},
		setGeneratedSetup: (
			state,
			action: PayloadAction<TuningSetup | null>,
		) => {
			state.generatedSetup = action.payload;
		},
		setReplacementParts: (
			state,
			action: PayloadAction<ReplacementParts>,
		) => {
			state.replacementParts = action.payload;
		},
		resetReplacementParts: (state) => {
			state.replacementParts = {} as ReplacementParts;
		},
		setWithReplacements: (state, action: PayloadAction<boolean>) => {
			state.withReplacements = action.payload;
		},
		resetAutoGenState: (state) => {
			state.generatedSetup = initialState.generatedSetup;
			state.targetIncrease = initialState.targetIncrease;
			state.replacementParts = initialState.replacementParts;
			state.withReplacements = initialState.withReplacements;
		},
	},
});

export const {
	setTargetIncrease,
	setGeneratedSetup,
	setReplacementParts,
	resetReplacementParts,
	setWithReplacements,
	resetAutoGenState,
} = autoGenSlice.actions;

export const selectAutoGen = (state: RootState) => state.autoGen;

export default autoGenSlice.reducer;
