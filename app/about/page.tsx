import AboutSection from '@/components/AboutSection';
import GithubIssueSection from '@/components/GithubIssueSection';

const AboutPage = () => {
	return (
		<>
			<div className="relative">
				<div className="bg-linear-to-b from-base-100 via-base-300 to-base-100 absolute w-full h-full" />
				<AboutSection />
			</div>
			<GithubIssueSection />
		</>
	);
};

export default AboutPage;
