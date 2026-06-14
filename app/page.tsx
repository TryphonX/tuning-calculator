import { FeatureGrid } from '@/components/FeatureGrid';
import GithubIssueSection from '@/components/GithubIssueSection';
import { Page } from '@/modules/navigation';
import { PLLogo } from '@/modules/resources';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<div className="relative">
				<div className="bg-linear-to-b from-base-100 via-base-300 to-base-100 absolute w-full h-full" />
				<div className="hero py-20">
					<div className="hero-content text-center flex-col w-full">
						<Image
							className="mb-6 rounded-full size-4/12 md:size-1/4 lg:size-1/6 mx-auto"
							src={PLLogo.src}
							alt={PLLogo.alt}
							aria-hidden
							width={202.66}
							height={202.66}
							priority
						/>
						<div className="badge badge-neutral">
							CMS 2026 Coming Soon!
						</div>
						<div className="max-w-md space-y-4">
							<h1 className="text-5xl font-bold">
								Tune efficiently!
							</h1>
							<div className="py-2">
								Tune efficiently using this calculator to
								determine the optimal setups with the best cost
								to boost ratio for your job!
							</div>
							<div className="flex flex-row justify-center space-x-2">
								<Link href={Page.Cms21Calculator}>
									<button
										type="button"
										className="btn btn-secondary btn-lg"
									>
										Get started now
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<FeatureGrid />
				<GithubIssueSection />
			</div>
		</>
	);
}
