import Link from 'next/link';
import { FaPaypal } from 'react-icons/fa6';
import { Page } from '@/modules/navigation';
import { HiMenuAlt2 } from 'react-icons/hi';

export default function Navbar() {
	return (
		<div role="navigation" className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						title="Menu"
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
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
							<Link href={Page.About}>About</Link>
						</li>
					</ul>
				</div>
				<Link href={Page.Home} className="btn btn-ghost text-xl">
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
						<Link href={Page.About}>About</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<Link href="https://paypal.me/TryphonKsydas" target="_blank">
					<button
						type="button"
						className="btn btn-sm bg-[#00457C] hover:bg-[#00457C]/50"
					>
						<FaPaypal /> Donate
					</button>
				</Link>
			</div>
		</div>
	);
}
