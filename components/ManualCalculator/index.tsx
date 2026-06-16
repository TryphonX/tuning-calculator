import { CartCard } from '../CartCard';
import { PartsCard } from '../PartsCard';
import { StepsNavigation } from '../StepsNavigation';

export const ManualCalculator = () => {
	return (
		<div className="flex flex-col h-full xl:gap-6">
			{/* Desktop View */}
			<div className="grow hidden xl:grid xl:grid-flow-row xl:grid-cols-2 2xl:grid-cols-5 xl:gap-12">
				<PartsCard className="2xl:col-span-3 flex-col" />
				<CartCard className="2xl:col-span-2 flex-col" />
			</div>
			{/* Mobile View */}
			<div className="grow flex flex-col m-8 gap-8 xl:hidden">
				<PartsCard />
				<CartCard />
			</div>
			<StepsNavigation
				className="px-4 max-lg:py-4 max-xl:py-2"
				forceLastStep
			/>
		</div>
	);
};
