import { Feature } from '@/modules/features';
import { LuCircleCheckBig } from 'react-icons/lu';

interface Props {
	feature: Feature;
}

export const FeatureCard = ({ feature }: Props) => {
	return (
		<div className="card bg-secondary/10 shadow-md row-span-3 grid grid-rows-subgrid hover:outline outline-accent hover:translate-y-[-0.5rem] transition-all duration-200">
			<div className="card-body row-span-3 grid grid-rows-subgrid">
				<div className="row-span-3 grid grid-rows-subgrid gap-2 h-full grid-flow-row place-content-start">
					<h2 className="card-title text-accent">
						{feature.icon} {feature.title}
						{feature.comingSoon && (
							<span className="max-sm:hidden badge badge-xs badge-primary badge-soft">
								Coming soon!
							</span>
						)}
					</h2>
					<p className="flex-grow-0">{feature.description}</p>
					<ul className="list-inside mt-4 space-y-2 text-accent">
						{feature.benefits.map((benefit, index) => (
							<li key={index} className="text-sm flex gap-2">
								<LuCircleCheckBig
									aria-hidden
									className="flex-shrink-0 mt-1"
									size={14}
								/>{' '}
								{benefit}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
