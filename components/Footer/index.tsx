import { PLLogo } from '@/modules/resources';
import Image from 'next/image';
import Link from 'next/link';
import {
	FaDiscord,
	FaGithub,
	FaGlobe,
	FaLinkedinIn,
	FaRegCircleQuestion,
} from 'react-icons/fa6';

export default function Footer() {
	const dateString = new Date(
		process.env.LAST_PUBLISH as string,
	).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	});

	return (
		<>
			<footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
				<nav>
					<h6 className="footer-title">Help</h6>
					<Link
						className="link link-hover"
						href="https://github.com/TryphonX/cms-tuning-calculator#usage"
					>
						User Guide
					</Link>
					<Link
						className="link link-hover"
						href="https://github.com/TryphonX/cms-tuning-calculator/releases/latest"
					>
						Release Notes
					</Link>
					<Link
						className="link link-hover"
						href="https://github.com/TryphonX/cms-tuning-calculator/issues/new"
					>
						Open an Issue{' '}
						<div
							className="tooltip tooltip-right"
							data-tip="Feature requests, bug reports, incorrect data, and questions can be submitted here."
						>
							<FaRegCircleQuestion />
						</div>
					</Link>
				</nav>
				<nav>
					<h6 className="footer-title">Github</h6>
					<Link
						className="link link-hover"
						href="https://github.com/TryphonX/cms-tuning-calculator"
					>
						Repository
					</Link>
					<Link
						className="link link-hover"
						href="https://github.com/TryphonX/cms-tuning-calculator/issues?q=state%3Aopen%20label%3Aenhancement"
					>
						Feature Requests
					</Link>
					<Link
						className="link link-hover"
						href="https://github.com/TryphonX/cms-tuning-calculator/issues?q=state%3Aopen%20label%3Abug"
					>
						Bug Reports
					</Link>
					<Link
						className="link link-hover"
						href="https://github.com/TryphonX/cms-tuning-calculator#contributing"
					>
						Contributing
					</Link>
				</nav>
				<nav>
					<h6 className="footer-title">Socials</h6>
					<Link
						className="link link-hover inline-flex items-center gap-2"
						href="https://tryphonx.github.io/"
					>
						<FaGlobe aria-hidden /> Website
					</Link>
					<Link
						className="link link-hover inline-flex items-center gap-2"
						href="https://www.linkedin.com/in/tryfon-xydas/"
					>
						<FaLinkedinIn aria-hidden /> LinkedIn
					</Link>
					<Link
						className="link link-hover inline-flex items-center gap-2"
						href="https://github.com/TryphonX"
					>
						<FaGithub aria-hidden /> GitHub
					</Link>
					<span className="inline-flex items-center gap-2">
						<FaDiscord aria-label="Discord Logo" /> TryphonX
					</span>
				</nav>
			</footer>
			<footer className="footer md:footer-horizontal items-center p-4 bg-base-300 text-neutral-content">
				<aside className="items-center grid-flow-col">
					<Image
						className="rounded-full"
						aria-hidden
						width={54}
						height={54}
						src={PLLogo.src}
						alt={PLLogo.alt}
					/>
					<div className="space-y-1">
						<p>
							Copyright © {new Date().getFullYear()} - All right
							reserved
						</p>
						<p className="text-xs text-base-content/80">
							<span className="text-accent font-semibold">
								v{process.env.APP_VERSION}
							</span>{' '}
							| {dateString}
						</p>
					</div>
				</aside>
				<div className="flex flex-row max-md:w-full max-md:justify-center items-center md:place-self-center md:justify-self-end">
					<nav className="flex max-md:w-full max-md:justify-center max-md:items-center md:place-self-center md:justify-self-end">
						<span>
							Made with ❤️ by{' '}
							<Link
								className="link link-hover font-semibold link-accent"
								href="https://tryphonx.github.io/"
								target="_blank"
							>
								TryphonX
							</Link>
						</span>
					</nav>
				</div>
			</footer>
		</>
	);
}
