import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import Head from 'next/head';
import { ReactNode } from 'react';
import './globals.css';

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] });

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
		<html lang="en" data-theme="dark">
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link
					rel="preload"
					as="image"
					href="/cms-tuning-calculator/images/logo.svg"
				/>
				<link
					rel="preload"
					as="image"
					href="/cms-tuning-calculator/images/Avatar2020.webp"
				/>
			</Head>
			<body className={`${ubuntu.className} flex flex-col min-h-svh`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
