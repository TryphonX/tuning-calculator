import { LuBug, LuDatabase, LuLightbulb } from 'react-icons/lu';
import { GHIssueCard } from './GHIssueCard';

export default function GithubIssueSection() {
	return (
		<div className="w-full flex items-center justify-center">
			<div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 py-6 max-w-7xl">
				<GHIssueCard
					icon={<LuLightbulb aria-hidden />}
					title="Suggestions"
					description="Have any ideas for improving the app? Let us know!"
					bulletPoints={[
						'New ideas for features',
						'Enhancements to existing features',
					]}
					btnData={{
						text: 'Submit Suggestion',
						url: 'https://github.com/TryphonX/cms-tuning-calculator/issues/new?template=feature_request.md',
					}}
				/>
				<GHIssueCard
					icon={<LuBug aria-hidden />}
					title="Bugs"
					description="Encountered a bug? Please report it so we can fix it!"
					bulletPoints={['Performance issues', 'Unexpected behavior']}
					btnData={{
						text: 'Report Bug',
						url: 'https://github.com/TryphonX/cms-tuning-calculator/issues/new?template=bug_report.md',
					}}
				/>
				<GHIssueCard
					icon={<LuDatabase aria-hidden />}
					title="Incorrect Data"
					description="See anything wrong with the engine or part data? Please report it!"
					bulletPoints={[
						'Missing parts or full engines',
						'Incorrect prices, boost, quantity, links, etc',
					]}
					btnData={{
						text: 'Report Incorrect Data',
						url: 'https://github.com/TryphonX/cms-tuning-calculator/issues/new?template=incorrect_data.md',
					}}
				/>
			</div>
		</div>
	);
}
