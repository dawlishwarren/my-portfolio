import AboutInfo from './components/aboutPage/AboutInfo';
import EducationTimeline from './components/aboutPage/EducationTimeline';
import Layout from './components/layout/layout';
import Head from 'next/head';
import styles from './components/aboutPage/about.module.css';
import ThemeContext from '../context/themeContext/theme-context';
import { useContext } from 'react';

export default function About() {
	const { activeTheme, loading } = useContext(ThemeContext);
	return (
		<>
			<Head>
				<link
					rel='stylesheet'
					href='https://use.fontawesome.com/releases/v5.15.4/css/all.css'
					integrity='sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm'
					crossorigin='anonymous'></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Lato&family=Quicksand&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<Layout inner pageName={'About'}>
				<div className={styles.info_container}>
					<AboutInfo />
					<EducationTimeline />
				</div>
			</Layout>
		</>
	);
}
