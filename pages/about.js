import AboutInfo from "./components/aboutPage/AboutInfo";
import EducationTimeline from "./components/aboutPage/EducationTimeline";
import Layout from "./components/layout/layout";
import Head from "next/head";

export default function About() {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
					integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
					crossorigin="anonymous"></link>
			</Head>
			<Layout inner pageName={"About"}>
				<AboutInfo />
				<EducationTimeline />
			</Layout>
		</>
	);
}
