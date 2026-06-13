import { Contributor } from '@/modules/contributors';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaGlobe } from 'react-icons/fa6';
import { LuCrown } from 'react-icons/lu';

interface Props {
	contributor: Contributor;
}

export const Row = ({ contributor }: Props) => {
	return (
		<li className="list-row">
			<div>
				<Image
					className={`size-10 rounded-box ${contributor.isCreator ? 'ring ring-accent ring-offset-base-100 ring-offset-2' : ''}`.trimEnd()}
					src={contributor.avatarUrl}
					alt={`${contributor.username}'s avatar`}
					width={40}
					height={40}
				/>
			</div>
			<div>
				<div className="space-x-2">
					<span>{contributor.name}</span>
					{contributor.isCreator && (
						<span className="badge badge-sm badge-accent font-semibold">
							<LuCrown aria-hidden />
							<span className="hidden sm:inline-flex">
								Creator
							</span>
						</span>
					)}
				</div>
				<div className="text-xs font-semibold opacity-60">
					{contributor.username}
				</div>
			</div>
			<Link
				href={`https://github.com/${contributor.username}`}
				target="_blank"
			>
				<button type="button" className="btn btn-ghost btn-square">
					<FaGithub aria-hidden />
					<span className="sr-only">
						Go to {contributor.username}&apos;s GitHub profile
					</span>
				</button>
			</Link>
			{contributor.websiteUrl && (
				<Link href={contributor.websiteUrl} target="_blank">
					<button type="button" className="btn btn-ghost btn-square">
						<FaGlobe aria-hidden />
						<span className="sr-only">
							Go to {contributor.username}&apos;s website
						</span>
					</button>
				</Link>
			)}
		</li>
	);
};
