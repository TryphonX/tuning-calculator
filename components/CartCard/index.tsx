import { Action, BaseProps } from '@/@types/globals';
import {
	selectCalculator,
	updateSelectedParts,
} from '@/lib/features/calculator/calculatorSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useMemo } from 'react';
import { FaCartShopping, FaRegCircleXmark } from 'react-icons/fa6';
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

	const cardTitle = useMemo(
		() => (
			<h2 className="space-x-2">
				<FaCartShopping aria-hidden className="inline-block" />
				<span>Cart</span>
			</h2>
		),
		[],
	);

	return (
		<Card title={cardTitle} className={className} actions={actions}>
			<div className="mt-4">
				<SelectedPartsTable />
			</div>
		</Card>
	);
};
