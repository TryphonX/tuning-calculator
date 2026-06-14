import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

export default function GithubIssueSection() {
	return (
		<div className="grid grid-cols-1 grid-rows-4 md:grid-cols-3 md:grid-rows-2 gap-8">
			<div className="space-y-4">
				<h3 className="text-3xl font-bold">Suggestions</h3>
				<p>
					If you have any suggestions for improvement, feel free to
					let me know by clicking the button below.
				</p>
			</div>
			<div className="space-y-4">
				<h3 className="text-3xl font-bold">Feedback & Bugs</h3>
				<p>
					Have any feedback about the app? Maybe you found a bug?
					Please take the time to submit an issue by clicking the
					button below.
				</p>
			</div>
			<div className="space-y-4">
				<h3 className="text-3xl font-bold">Incorrect Data</h3>
				<p>
					See anything wrong with the information about the engine
					specs, parts or missing links between parts and engines?
					Please take the time to submit an issue by clicking the
					button below.
				</p>
			</div>
			<div className="md:col-span-3">
				<Link
					href="https://github.com/TryphonX/cms-tuning-calculator/issues/new"
					target="_blank"
				>
					<button
						type="button"
						className="btn btn-secondary btn-block"
					>
						<FaGithub aria-hidden /> Open an issue
					</button>
				</Link>
			</div>
		</div>
	);
}
