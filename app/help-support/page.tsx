import GithubIssueSection from '@/components/GithubIssueSection';

const helpAndSupportPage = () => {
	return (
		<div className="relative flex flex-col items-center justify-center">
			<div className="bg-linear-to-b from-base-100 via-base-300 to-base-100 absolute w-full h-full" />
			<div className="relative py-16 p-8 space-y-20 w-full max-w-7xl">
				<div className="space-y-8">
					<h1 className="text-5xl font-bold">Help & Support</h1>
					<p>
						Got a question or found a bug? Check the quick guides
						below to get sorted, or head straight to GitHub to help
						improve the tool.
					</p>
				</div>
				<div className="space-y-50">
					<div className="space-y-8">
						<h2 className="text-4xl font-bold">FAQs</h2>
						<div className="space-y-3">
							<div className="collapse bg-base-100 border border-accent collapse-arrow">
								<input
									aria-label="Expand FAQ"
									type="checkbox"
								/>
								<div className="collapse-title font-semibold">
									Q: The app says it generates the best setup,
									but I have generated a better one. Why is
									that?
								</div>
								<div className="collapse-content text-sm">
									A: The app generates the best{' '}
									<em>realistic</em> setup. This means that it
									will not generate setups where only 1 of X
									parts will be upgraded, as this is not a
									realistic scenario. For example, if you are
									tuning an I4 engine and the best setup
									requires changing 1 of 4 spark plugs, the
									app will not generate this setup.
								</div>
							</div>
							<div className="collapse bg-base-100 border border-accent collapse-arrow">
								<input
									aria-label="Expand FAQ"
									type="checkbox"
								/>
								<div className="collapse-title font-semibold">
									Q: Why are some parts missing?
								</div>
								<div className="collapse-content text-sm">
									A: The data was collected from the wiki and
									some parts are missing. If you find any
									missing parts, please report them on GitHub
									and they will be added to the app.
								</div>
							</div>
						</div>
					</div>
					<div className="space-y-8">
						<h2 className="text-4xl font-bold">Report an Issue</h2>
						<p>
							Found a bug or have a suggestion? Feel free to
							report it on GitHub!
						</p>
						<GithubIssueSection />
					</div>
				</div>
			</div>
		</div>
	);
};

export default helpAndSupportPage;
