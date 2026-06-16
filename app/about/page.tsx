import { Contributors } from '@/components/About/Contributors';
import { Hero } from '@/components/About/Hero';
import { HowitWorks } from '@/components/About/HowItWorks';

const AboutPage = () => {
	return (
		<div className="relative">
			<div className="bg-linear-to-b from-base-100 via-base-300 to-base-100 absolute w-full h-full" />
			<Hero />
			<HowitWorks />
			<Contributors />
		</div>
	);
};

export default AboutPage;
