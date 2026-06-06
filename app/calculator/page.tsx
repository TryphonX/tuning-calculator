import { Page } from '@/modules/navigation';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function Calculator() {
	return (
		<div className="hero min-h-[88.5vh]">
			<div className="hero-content text-center">
				<div className="max-w-xl">
					<h1 className="text-5xl font-bold text-primary">
						Coming Soon!
					</h1>
					<p className="py-6">
						Car Mechanic Simulator 26 Tuning Calculator will be
						released once the full game is released and the
						necessary data can be extracted. Stay tuned for updates,
						and in the meantime, check out CMS 21 Tuning Calculator,
						if you haven&apos;t already!
					</p>
					<Link href={Page.Cms21Calculator}>
						<button className="btn btn-primary">
							To CMS 21 Calculator <FaArrowRight aria-hidden />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
