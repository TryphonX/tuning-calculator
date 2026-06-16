import { useMemo } from 'react';
import { LuCircleCheckBig } from 'react-icons/lu';

interface Props {
	icon: React.ReactNode;
	title: string;
	description: string;
	upTo?: number;
}

const BULLET_POINTS = [
	'Filter parts by Engine',
	'Live preview of your build',
	'Clear your build anytime',
	'Save time and CR',
	'Get the most cost-effective realistic setup',
	'Near-instant calculations for any build',
	'Get as close to the target boost as possible',
	'Minimize cost-to-boost ratio',
	'Include upgrades for parts that are going to be replaced anyway into the calculations',
	"Comprehensive report of what you've gained with the replacement parts, if any",
];

export const GenFeatureCard = ({ icon, title, description, upTo }: Props) => {
	const bulletPoints = useMemo(
		() => (!upTo ? BULLET_POINTS : BULLET_POINTS.slice(0, upTo)),
		[upTo],
	);

	return (
		<div className="card bg-secondary/10 shadow-md row-span-3 grid grid-rows-subgrid hover:outline outline-accent hover:translate-y-[-0.5rem] transition-all duration-200">
			<div className="card-body row-span-3 grid grid-rows-subgrid">
				<div className="row-span-3 grid grid-rows-subgrid gap-4 h-full grid-flow-row place-content-start">
					<div className="space-y-2">
						<h2 className="card-title text-accent">
							{icon} {title}
						</h2>
						<p className="flex-grow-0">{description}</p>
					</div>
					<ul className="list-inside space-y-2 text-accent">
						{bulletPoints.map((point, index) => (
							<li key={index} className="text-sm flex gap-2">
								<LuCircleCheckBig
									className="flex-shrink-0 mt-1"
									aria-hidden
									size={14}
								/>{' '}
								{point}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
