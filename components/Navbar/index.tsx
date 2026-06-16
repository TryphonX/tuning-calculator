import { Page } from '@/modules/navigation';
import { PLLogo } from '@/modules/resources';
import Image from 'next/image';
import Link from 'next/link';
import { FaPaypal } from 'react-icons/fa6';
import { HiMenuAlt2 } from 'react-icons/hi';

export default function Navbar() {
	return (
		<div role="navigation" className="navbar bg-base-100 z-10">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						title="Menu"
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
						aria-label="Open navigation menu"
					>
						<HiMenuAlt2 size={24} aria-hidden />
					</div>
					<ul
						tabIndex={-1}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<Link href={Page.Cms26Calculator}>CMS 2026</Link>
						</li>
						<li>
							<Link href={Page.Cms21Calculator}>CMS 2021</Link>
						</li>
						<li>
							<Link href={Page.HelpAndSupport}>
								Help & Support
							</Link>
						</li>
						<li>
							<Link href={Page.About}>About</Link>
						</li>
						<li className="sm:hidden">
							<Link
								href="https://paypal.me/TryphonKsydas"
								target="_blank"
							>
								<FaPaypal aria-hidden /> Donate
								<span className="sr-only"> via PayPal</span>
							</Link>
						</li>
					</ul>
				</div>
				<Link href={Page.Home} className="btn btn-ghost text-xl">
					<Image
						src={PLLogo.src}
						alt={PLLogo.alt}
						aria-hidden
						width={30}
						height={30}
						priority
					/>
					CmsTuningCalculator
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href={Page.Cms26Calculator}>CMS 2026</Link>
					</li>
					<li>
						<Link href={Page.Cms21Calculator}>CMS 2021</Link>
					</li>
					<li>
						<Link href={Page.HelpAndSupport}>Help & Support</Link>
					</li>
					<li>
						<Link href={Page.About}>About</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end hidden sm:inline-flex">
				<Link href="https://paypal.me/TryphonKsydas" target="_blank">
					<button
						type="button"
						className="btn btn-sm bg-[#00457C] hover:bg-[#00457C]/50"
					>
						<FaPaypal aria-hidden /> Donate
						<span className="sr-only"> via PayPal</span>
					</button>
				</Link>
			</div>
		</div>
	);
}
