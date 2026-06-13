import { Action, BaseProps } from '@/@types/globals';
import {
	selectCalculator,
	updateSelectedParts,
} from '@/lib/features/calculator/calculatorSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useMemo } from 'react';
import { FaRegCircleXmark } from 'react-icons/fa6';
import Card from '../Card';
import { SelectedPartsTable } from './SelectedPartsTable';

export const CartCard = ({ className }: BaseProps) => {
	const dispatch = useAppDispatch();
	const { selectedParts } = useAppSelector(selectCalculator);

	const clearAction: Action = useMemo(
		() => ({
			label: (
				<>
					<FaRegCircleXmark aria-hidden /> Clear
				</>
			),
			disabled: !selectedParts.length,
			className: 'btn-error',
			onClick: () => dispatch(updateSelectedParts([])),
		}),
		[dispatch, selectedParts.length],
	);

	const actions: Action[] = useMemo(() => [clearAction], [clearAction]);

	return (
		<Card title="Cart" className={className} actions={actions}>
			<div className="mt-4">
				<SelectedPartsTable />
			</div>
		</Card>
	);
};
