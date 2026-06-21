import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { PLAvatar, PLLogo } from '@/modules/resources';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import Head from 'next/head';
import { ReactNode } from 'react';
import './globals.css';

const ubuntu = Ubuntu({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'CmsTuningCalculator',
	description:
		'Web app that makes tuning cars in Car Mechanic Simulator easier.',
	authors: { name: 'Tryfon Xydas' },
	keywords: [
		'CmsTuningCalculator',
		'Car Mechanic Simulator',
		'CMS21',
		'Car',
		'Mechanic',
		'Simulator',
		'21',
		'CMS',
		'Tuning',
		'Calculator',
		'CMS26',
		'26',
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="preload" as="image" href={PLLogo.src} />
				<link rel="preload" as="image" href={PLAvatar.src} />
			</Head>
			<body className={`${ubuntu.className} flex flex-col min-h-svh`}>
				<Navbar />
				<main className="flex-1 flex flex-col">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
