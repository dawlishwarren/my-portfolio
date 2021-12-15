import AboutInfo from './components/about/AboutInfo';
import EducationTimeline from './components/about/EducationTimeline';
import Layout from './components/layout/layout';

export default function About() {
	return (
		<Layout inner pageName={'About'}>
			<AboutInfo />
			<EducationTimeline />
		</Layout>
	);
}
