import AboutInfo from "../components/aboutPage/AboutInfo";
import EducationTimeline from "../components/aboutPage/EducationTimeline";
import Layout from "./components/layout/layout";
import Head from "next/head";
import styles from "./components/aboutPage/about.module.css";
import ThemeContext from "../context/themeContext/theme-context";
import { useContext } from "react";

export default function About() {
	const { activeTheme, loading } = useContext(ThemeContext);
	return (
		<Layout inner pageName={"About"}>
			<div className={styles.info_container}>
				<AboutInfo />
				<EducationTimeline />
			</div>
		</Layout>
	);
}
