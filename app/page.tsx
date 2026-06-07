import GithubIssueSection from '@/components/GithubIssueSection';

export default function Home() {
	return (
		<>
			<div className="relative">
				<div className="bg-linear-to-b from-base-100 via-base-300 to-base-100 absolute w-full h-full" />
				<div className="hero py-20">
					<div className="hero-content text-center">
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
								<button className="btn btn-secondary btn-lg">
									Get started now
								</button>
							</div>
							<p className="text-sm text-primary">
								CMS 2026 Coming Soon!
							</p>
						</div>
					</div>
				</div>
				<div className="hero">
					<div className="hero-content flex-col lg:flex-row">
						<div className="max-w-sm rounded-lg shadow-2xl">
							[Placeholder for image]
						</div>
						<p className="py-6">
							Somthing about what the app does in the screenshot
						</p>
					</div>
				</div>
				<div className="hero">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<div className="max-w-sm rounded-lg shadow-2xl">
							[Placeholder for image]
						</div>
						<p className="py-6">
							Somthing about what the app does in the screenshot
						</p>
					</div>
				</div>
				<GithubIssueSection />
			</div>
		</>
	);
}
