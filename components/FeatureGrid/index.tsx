import { FEATURES } from '@/modules/features';
import { FeatureCard } from './FeatureCard';

export const FeatureGrid = () => {
	return (
		<div className="w-full flex items-center justify-center">
			<div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8 max-w-7xl">
				{FEATURES.map((feature, index) => (
					<FeatureCard key={index} feature={feature} />
				))}
			</div>
		</div>
	);
};
