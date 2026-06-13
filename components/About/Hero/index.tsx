import { Page } from '@/modules/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaPlay } from 'react-icons/fa6';

export const Hero = () => {
	return (
		<div className="hero min-h-screen relative">
			<div className="hero-content text-center p-8">
				<div>
					<Image
						className="mb-6 rounded-full size-4/12 md:size-1/4 lg:size-1/6 mx-auto"
						src="/cms-tuning-calculator/images/logo.svg"
						alt="tuning calculator logo"
						aria-hidden
						width={202.66}
						height={202.66}
						priority
					/>
					<h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
						About CmsTuningCalculator
					</h1>
					<div className="py-6 flex flex-col space-y-4">
						<p>
							Introducing <strong>CmsTuningCalculator</strong>{' '}
							&ndash; your go-to utility app for optimizing engine
							tuning in <em>Car Mechanic Simulator</em>.
						</p>
						<p>
							Tackling the often laborious task of filtering parts
							eligible for tuning, this app streamlines the
							process, saving you valuable time. Powered by a
							comprehensive database of parts, you get instant
							access to vital information like cost, performance
							boost, and the cost-to-boost ratio.
						</p>
						<p className="text-xs text-base-content/75">
							This app is a personal project and is not associated
							with the makers and/or publishers of the game in any
							way shape or form.
							<span className="block font-thin text-xs text-base-content/75">
								Don&apos;t go through the effort of running any
								of this text through ai detectors; I was lazy, I
								admit it.
							</span>
						</p>
					</div>

					<div className="flex-col space-y-4">
						<div>
							<Link className="block" href={Page.Cms21Calculator}>
								<button className="btn btn-secondary btn-lg btn-wide">
									<FaPlay aria-hidden /> Try it out now!
								</button>
							</Link>
						</div>
						<div>
							<Link
								href="https://github.com/TryphonX/cms-tuning-calculator"
								target="_blank"
							>
								<button
									type="button"
									className="btn btn-accent btn-sm btn-outline"
								>
									<FaGithub aria-hidden /> Source code
								</button>
							</Link>
							<p className="text-xs text-base-content/75 mt-2">
								This project is open-source. Licensed under{' '}
								<Link
									className="link"
									href="https://github.com/TryphonX/cms-tuning-calculator/blob/main/COPYING.txt"
									target="_blank"
								>
									GNU GENERAL PUBLIC LICENSE v3
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
