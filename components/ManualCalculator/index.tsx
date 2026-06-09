import { CartCard } from '../CartCard';
import EngineCard from '../EngineCard';
import { PartsCard } from '../PartsCard';
import { StepsNavigation } from '../StepsNavigation';

export const ManualCalculator = () => {
	return (
		<div className="flex flex-col h-full gap-4">
			{/* Desktop View */}
			<div className="grow hidden xl:grid xl:grid-flow-row xl:grid-cols-5 xl:gap-12 p-4">
				<PartsCard className="col-span-3 flex-col" />
				<CartCard className="col-span-2 flex-col" />
			</div>
			{/* Mobile View */}
			<div className="grow flex flex-col m-8 gap-8 xl:hidden">
				<EngineCard />
				<PartsCard />
				<CartCard />
			</div>
			<StepsNavigation className="px-4" forceLastStep />
		</div>
	);
};
