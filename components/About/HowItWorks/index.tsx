import { useMemo } from 'react';
import { LuWandSparkles, LuWrench } from 'react-icons/lu';
import Card from '../../Card';

export const HowitWorks = () => {
	const autoGenTitle = useMemo(
		() => (
			<h3 className="text-xl font-bold space-x-2">
				<LuWandSparkles
					aria-hidden
					size={20}
					className="inline-block"
				/>
				<span>Auto-Generated Setup</span>
			</h3>
		),
		[],
	);

	const manualTitle = useMemo(
		() => (
			<h3 className="text-xl font-bold space-x-2">
				<LuWrench aria-hidden size={20} className="inline-block" />
				<span>Manual Build</span>
			</h3>
		),
		[],
	);

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
				<div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-50">
					<Card
						className="hover:scale-110 delay-75 transition-all"
						title={autoGenTitle}
					>
						<p>
							Input your desired boost percentage and specify any
							parts you already need to replace. The app will
							calculate the absolute most cost-effective
							combination, factoring in whether it&apos;s cheaper
							to outright upgrade a part rather than replacing it
							with stock.
						</p>
					</Card>
					<Card
						className="hover:scale-110 delay-75 transition-all"
						title={manualTitle}
					>
						<p>
							Hand-pick your performance parts one by one to
							experiment with custom builds while tracking your
							real-time performance metrics and efficiency ratios.
						</p>
					</Card>
				</div>
				<p className="text-center text-lg font-semibold mt-8">
					Say goodbye to guesswork and hello to precision tuning.
				</p>
			</div>
		</div>
	);
};
