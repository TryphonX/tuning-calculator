import { Action, BaseProps } from '@/@types/globals';
import { selectCalculator } from '@/lib/features/calculator/calculatorSlice';
import { useAppSelector } from '@/lib/hooks';
import { UnlockEvent, UpdateSelectedPartsEvent } from '@/modules/customEvents';
import { useMemo } from 'react';
import { FaRegCircleXmark, FaUnlock } from 'react-icons/fa6';
import Card from '../Card';
import { SelectedPartsTable } from './SelectedPartsTable';

export const CartCard = ({ className }: BaseProps) => {
	const { locked, selectedParts } = useAppSelector(selectCalculator);

	const unlockAction: Action = useMemo(
		() => ({
			label: (
				<>
					<FaUnlock aria-hidden /> Unlock
				</>
			),
			className: 'btn-secondary',
			onClick: () => {
				UnlockEvent.dispatch();
			},
			disabled: !locked,
		}),
		[locked],
	);

	const clearAction: Action = useMemo(
		() => ({
			label: (
				<>
					<FaRegCircleXmark aria-hidden /> Clear
				</>
			),
			disabled: !selectedParts.length || locked,
			className: 'btn-error',
			onClick: () => UpdateSelectedPartsEvent.dispatch([]),
		}),
		[selectedParts, locked],
	);

	const actions: Action[] = useMemo(
		() => [unlockAction, clearAction],
		[unlockAction, clearAction],
	);

	return (
		<Card title="Cart" className={className} actions={actions}>
			<div className="mt-4">
				<SelectedPartsTable />
			</div>
		</Card>
	);
};
