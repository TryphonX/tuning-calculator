import Link from 'next/link';
import { FaPaypal } from 'react-icons/fa6';
import { Page } from '@/modules/navigation';

export default function Navbar() {
	return (
		<div role="navigation" className="navbar bg-base-300 shadow-xl">
			<div className="flex-1">
				<Link className="btn btn-ghost" href={Page.Home}>
					<span className="text-xl">Tuning Calculator</span>
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li className="max-sm:hidden">
						<Link
							className="rounded-xl font-bold"
							href={Page.Cms26Calculator}
						>
							CMS 26{' '}
							<span className="text-xs text-primary/70">
								Coming Soon!
							</span>
						</Link>
					</li>
					<li className="max-sm:hidden">
						<Link
							className="rounded-xl"
							href={Page.Cms21Calculator}
						>
							CMS 21
						</Link>
					</li>
					<li className="sm:hidden">
						<details>
							<summary />
							<ul className="p-2 bg-base-100 rounded-t-none z-10">
								<li>
									<Link href={Page.Cms21Calculator}>
										CMS 21
									</Link>
								</li>
							</ul>
						</details>
					</li>
				</ul>
				<Link href="https://paypal.me/TryphonKsydas" target="_blank">
					<button type="button" className="btn btn-sm bg-[#00457C]">
						<FaPaypal /> Donate
					</button>
				</Link>
			</div>
		</div>
	);
}
