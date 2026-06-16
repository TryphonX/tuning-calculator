import Link from 'next/link';
import { LuTriangleAlert } from 'react-icons/lu';

interface Props {
	partMissing: boolean;
}

const MissingPartAlert = ({ partMissing }: Props) => {
	if (!partMissing) return null;

	return (
		<div
			role="alert"
			className="alert alert-warning alert-soft py-2 px-4 mb-4 max-sm:items-start"
		>
			<LuTriangleAlert className="max-sm:mt-2" size={24} aria-hidden />
			<div>
				<p className="text-sm font-bold">
					Some parts are missing data! Please double check within the
					game.
					<br />
					<span className="text-xs font-normal">
						Any help filling in the missing data is welcome!{' '}
						<Link
							className="link"
							target="_blank"
							href="https://github.com/TryphonX/cms-tuning-calculator/issues/new"
						>
							Open an issue on GitHub.
						</Link>
					</span>
				</p>
			</div>
		</div>
	);
};

export default MissingPartAlert;
