export interface Contributor {
	name: string;
	username: string;
	avatarUrl: string;
	isCreator?: boolean;
	websiteUrl?: string;
}

export const contributors: Contributor[] = [
	{
		name: 'Tryfon Xydas',
		username: 'TryphonX',
		avatarUrl: '/cms-tuning-calculator/images/Avatar2020.webp',
		isCreator: true,
		websiteUrl: 'https://tryphonx.github.io',
	},
	{
		name: 'Joshua Barrass',
		username: 'joshbarrass',
		avatarUrl: 'https://avatars.githubusercontent.com/u/20770871',
		websiteUrl: 'https://barrass.dev',
	},
];
