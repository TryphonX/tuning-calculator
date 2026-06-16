import {
	LuFilter,
	LuHardHat,
	LuTrendingUp,
	LuWandSparkles,
	LuWrench,
} from 'react-icons/lu';

export interface Feature {
	icon: React.ReactNode;
	title: string;
	comingSoon?: boolean;
	description: string;
	benefits: string[];
}

export const FEATURES: Feature[] = [
	{
		icon: <LuWandSparkles aria-hidden />,
		title: 'Auto-Tuning',
		description:
			'Sit back and let the app do the work for you! The auto-generated tuning method will select the best parts for your engine based on your target performance boost.',
		benefits: [
			'No wasted time looking for the best parts for your engine!',
			'Instantly get the parts with the best cost-to-boost ratio for your engine!',
			'Any replacements needed for the selected parts will be automatically added to your cart and the cost deducted from your total cost.',
			'Instant build generation!',
		],
	},
	{
		icon: <LuWrench aria-hidden />,
		title: 'Manual Sandbox',
		description:
			'Want full control over your tuning? The manual tuning method allows you to select the parts you want to use for your engine and see the cost and performance boost for each part.',
		benefits: [
			'Full control over your tuning! Hand-pick the parts YOU want to use for your engine!',
			'See the stats of your build in real-time! The cart is updated as you select parts.',
			'Easy comparison of parts! All the data is available to you.',
			'Sort parts by cost, boost, or cost-to-boost ratio to find the parts you need!',
		],
	},
	{
		icon: <LuFilter aria-hidden />,
		title: 'Parts Filtering',
		description:
			'Based on the engine selection, parts are automatically filtered to show only those that fit your engine.',
		benefits: [
			"No more wasted time scrolling through parts that don't fit your engine!",
			'Stats are shown for each part, including cost, performance boost, and cost-to-boost ratio.',
		],
	},
	{
		icon: <LuTrendingUp aria-hidden />,
		title: 'Cost-to-Boost Efficiency Ratio',
		description:
			'Never overpay for minor gains. The app handles the math to show you exactly which parts give you the highest performance increase per dollar spent, helping you maximize profit on customer jobs.',
		benefits: [
			'No more math required! The app calculates the cost-to-boost ratio for you with 2-decimal precision!',
			'Instantly see which parts give you the best performance boost for your money!',
			'Maximize profit on customer jobs!',
		],
	},
	{
		icon: <LuHardHat aria-hidden />,
		title: 'Realism & Integrity Checks',
		description:
			'To maintain mechanical realism, the app ensures matching parts are either tuned everywhere on the engine or left entirely stock, generating 100% realistic builds that work perfectly in-game.',
		benefits: [
			'No single spark plug tuned while the rest are stock! The app ensures all matching parts are either tuned or left stock, maintaining mechanical realism.',
			'No more unrealistic builds!',
		],
	},
	{
		icon: (
			<span role="img" aria-label="CMS21 to CMS26">
				<span aria-hidden>
					CMS2
					<span aria-hidden className="text-rotate duration-5000">
						<span>
							<span>1</span>
							<span>6</span>
						</span>
					</span>
				</span>
			</span>
		),
		title: 'Multi-Game Support',
		comingSoon: true,
		description:
			'Easily switch between full databases for different generations of the game. Get tailored calculations built specifically around the parts, pricing, and tuning mechanics of your game.',
		benefits: [
			'Separate databases for different generations of the game! Get tailored calculations built specifically around the parts, pricing, and tuning mechanics of your game.',
			'Hope the tuning stays similar, it should be easy to adapt the app to future generations of the game!',
		],
	},
];
