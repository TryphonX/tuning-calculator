import { Action, BaseProps } from '@/@types/globals';
import { CalculatorContext } from '@/modules/contexts';
import { useContext, useMemo } from 'react';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import AutoGenModal from '../AutoGenModal';
import Card from '../Card';
import { PartsTable } from './PartsTable';

const AUTO_GEN_MODAL_ID = 'autoGenModal';

export const CompatiblePartsCard = ({ className }: BaseProps) => {
	const { currentEngine } = useContext(CalculatorContext);

	const autoGenerateAction: Action = useMemo<Action>(
		() => ({
			label: <FaWandMagicSparkles aria-hidden />,
			optionalLabel: 'Auto-generate',
			className: 'btn-primary',
			disabled: !currentEngine,
			onClick: () => {
				const modal = document.getElementById(AUTO_GEN_MODAL_ID);

				if (modal) {
					(modal as HTMLDialogElement).showModal();
				}
			},
		}),
		[currentEngine],
	);

	const actions = [autoGenerateAction];

	return (
		<>
			<Card
				title="Available Parts"
				className={className}
				actions={actions}
			>
				<div className="mt-4">
					<PartsTable />
				</div>
			</Card>
			<AutoGenModal id={AUTO_GEN_MODAL_ID} />
		</>
	);
};
