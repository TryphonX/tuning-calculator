import { BaseProps } from '@/@types/globals';
import { selectCurrentEngine } from '@/lib/features/calculator/calculatorSlice';
import { useAppSelector } from '@/lib/hooks';
import Card from '../Card';
import { PartsTable } from './PartsTable';

export const PartsCard = ({ className }: BaseProps) => {
	const currentEngine = useAppSelector(selectCurrentEngine);

	return (
		<>
			<Card
				title={`Available Parts${currentEngine ? ` for ${currentEngine.name}` : ''}`}
				className={className}
			>
				<div className="mt-4">
					<PartsTable />
				</div>
			</Card>
		</>
	);
};
