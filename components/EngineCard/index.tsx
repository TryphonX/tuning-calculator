import { BaseProps } from '@/@types/globals';
import Card from '../Card';
import { StepsNavigation } from '../StepsNavigation';
import EngineImage from './EngineImage';
import EngineSelect from './EngineSelect';
import EngineSpecsTable from './EngineSpecsTable';

export default function EngineCard({ className }: BaseProps) {
	return (
		<Card title="Engine" className={className}>
			<div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4">
				<EngineImage />
				<div className="sm:col-span-2 w-full flex flex-col h-full gap-10">
					<div className="flex flex-col gap-6">
						<EngineSelect />
						<EngineSpecsTable />
					</div>
					<StepsNavigation />
				</div>
			</div>
		</Card>
	);
}
