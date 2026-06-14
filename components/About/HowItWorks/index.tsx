import { LuWandSparkles, LuWrench } from 'react-icons/lu';
import { GenFeatureCard } from './GenFeatureCard';

export const HowitWorks = () => {
	return (
		<div className="px-8 w-full flex flex-row justify-center relative">
			<div className="flex flex-col space-y-12 max-w-7xl">
				<div className="flex flex-col space-y-4">
					<h2 className="text-4xl font-bold">How it works</h2>
					<p>
						To maintain mechanical realism, the app only presents
						complete solutions (ensuring matching parts are either
						tuned everywhere on the engine or not at all). You can
						approach your build in two ways:
					</p>
				</div>
				<div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-x-50">
					<GenFeatureCard
						icon={<LuWrench />}
						title="Manual Build"
						description="Hand-pick your performance parts one by one to experiment with custom builds while tracking your real-time performance metrics and efficiency ratios."
						upTo={4}
					/>
					<GenFeatureCard
						icon={<LuWandSparkles />}
						title="Auto-Generated Setup"
						description="Input your desired boost percentage and specify any parts you already need to replace. The app will calculate the absolute most cost-effective combination, factoring in whether it's cheaper to outright upgrade a part rather than replacing it with stock."
					/>
				</div>
				<p className="text-center text-lg font-semibold mt-8">
					Say goodbye to <span className="text-error">guesswork</span>{' '}
					and hello to{' '}
					<span className="text-accent">precision tuning</span>
				</p>
			</div>
		</div>
	);
};
