import { CONTRIBUTORS } from '@/modules/contributors';
import { Row } from './Row';

export const Contributors = () => {
	return (
		<div className="px-8 w-full flex flex-row justify-center relative my-100">
			<div className="flex flex-col space-y-4 w-full max-w-7xl">
				<h2 className="text-4xl font-bold">Contributors</h2>
				<ul className="list bg-base-100 rounded-box shadow-md border-t border-base-content/10">
					{CONTRIBUTORS.map((contributor) => (
						<Row
							key={contributor.username}
							contributor={contributor}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};
