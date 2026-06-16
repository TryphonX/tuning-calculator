'use client';

import { BaseProps } from '@/@types/globals';
import {
	nextStep,
	prevStep,
	selectCurrentStep,
} from '@/lib/features/calculator/calculatorSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

interface Props extends BaseProps {
	nextDisabled?: boolean;
	forceLastStep?: boolean;
}

export const StepsNavigation = ({
	className,
	nextDisabled,
	forceLastStep,
}: Props) => {
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
			{!forceLastStep && (
				<button
					type="button"
					className="btn btn-secondary"
					disabled={nextDisabled}
					onClick={() => dispatch(nextStep())}
				>
					Proceed
				</button>
			)}
		</div>
	);
};
