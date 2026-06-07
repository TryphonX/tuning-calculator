import { CartCard } from '../CartCard';
import EngineCard from '../EngineCard';
import { CompatiblePartsCard } from '../PartsCard';

export const ManualCalculator = () => {
	return (
		<>
			{/* Desktop View */}
			<div className="grow hidden xl:grid xl:grid-flow-row xl:grid-cols-5 xl:gap-12 p-4">
				<div className="xl:col-span-2 flex-col space-y-8 xl:space-y-12">
					<EngineCard />
					<CartCard className="max-xl:hidden" />
				</div>
				<div className="xl:col-span-3 flex-col space-y-8 xl:space-y-12">
					<CompatiblePartsCard className="max-xl:hidden" />
				</div>
			</div>
			{/* Mobile View */}
			<div className="grow flex flex-col m-8 gap-8 xl:hidden">
				<EngineCard />
				<CompatiblePartsCard />
				<CartCard />
			</div>
		</>
	);
};
