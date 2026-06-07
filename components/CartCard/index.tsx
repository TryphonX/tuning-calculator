import { BaseProps } from '@/@types/globals';
import { CalculatorContext } from '@/modules/contexts';
import { UnlockEvent } from '@/modules/customEvents';
import { useContext } from 'react';
import { FaUnlock } from 'react-icons/fa6';
import Card from '../Card';
import { SelectedPartsTable } from './SelectedPartsTable';

export const CartCard = ({ className }: BaseProps) => {
	const { locked } = useContext(CalculatorContext);

	const actions = [
		{
			label: (
				<>
					<FaUnlock aria-hidden /> Unlock
				</>
			),
			className: 'btn-secondary btn-soft',
			onClick: () => {
				UnlockEvent.dispatch();
			},
			disabled: !locked,
		},
	];

	return (
		<Card title="Cart" className={className} actions={actions}>
			<div className="mt-4">
				<SelectedPartsTable />
			</div>
		</Card>
	);
};
