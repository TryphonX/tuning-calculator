'use client';

import CalculatorWrapper from '@/components/CalculatorWrapper';
import { CartCard } from '@/components/CartCard';
import EngineCard from '@/components/EngineCard';
import { CompatiblePartsCard } from '@/components/PartsCard';

export default function Calculator() {
	return (
		<CalculatorWrapper>
			<h1 className="hidden">Car Mechanic Simulator 21 Calculator</h1>
			{/* Desktop View */}
			<div
				className="
				grow
				hidden
				xl:p-8
				xl:grid xl:grid-flow-row xl:grid-cols-5 xl:gap-12 m-8"
			>
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
		</CalculatorWrapper>
	);
}
