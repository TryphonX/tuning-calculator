import Link from 'next/link';
import { LuCircleCheckBig } from 'react-icons/lu';

interface Props {
	icon: React.ReactNode;
	title: string;
	description: string;
	bulletPoints: string[];
	btnData: {
		text: string;
		url: string;
	};
}

export const GHIssueCard = ({
	icon,
	title,
	description,
	bulletPoints,
	btnData,
}: Props) => {
	return (
		<div className="card bg-secondary/10 shadow-md row-span-3 grid grid-rows-subgrid hover:outline outline-accent hover:translate-y-[-0.5rem] transition-all duration-200">
			<div className="card-body row-span-3 grid grid-rows-subgrid">
				<div className="row-span-3 grid grid-rows-subgrid gap-6 h-full grid-flow-row place-content-start">
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
									size={14}
								/>{' '}
								{point}
							</li>
						))}
					</ul>
					<Link
						className="mt-4"
						href={
							btnData.url ??
							'https://github.com/YOUR_USERNAME/YOUR_REPO/issues/new?template=bug_report.md'
						}
						target="_blank"
					>
						<button
							type="button"
							className="btn btn-accent btn-block"
						>
							{btnData.text}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
