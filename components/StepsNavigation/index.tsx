'use client';

import { BaseProps } from '@/@types/globals';
import {
	nextStep,
	prevStep,
	selectCurrentStep,
} from '@/lib/features/calculator/calculatorSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export const StepsNavigation = ({ className }: BaseProps) => {
	const currentStep = useAppSelector(selectCurrentStep);
	const dispatch = useAppDispatch();

	return (
		<div className={`flex justify-end items-end gap-4 ${className}`}>
			{currentStep > 0 && (
				<button
					type="button"
					className="btn btn-secondary"
					onClick={() => dispatch(prevStep())}
				>
					Back
				</button>
			)}
			<button
				type="button"
				className="btn btn-secondary"
				onClick={() => dispatch(nextStep())}
			>
				Proceed
			</button>
		</div>
	);
};
