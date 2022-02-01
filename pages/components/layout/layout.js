import Head from "next/head";
import styles from "./layout.module.css";
import Spinner from "../spinner/spinner";
import Header from "../header/header";
import ThemeContext from "../../../context/themeContext/theme-context";
import { useContext, useEffect, useState } from "react";
import { getAllThemesFromLocalStorage } from "../../../utils/localStorage";
import { arrayIsPopulated } from "../../../utils/validation";

export const siteTitle = "Alex Warren | Web Designer";

export default function Layout({ children, home, inner, pageName }) {
	// Importing theme context
	const {
		themes,
		loadThemes,
		getDefaultTheme,
		activeTheme,
		setActiveTheme,
		loading,
	} = useContext(ThemeContext);

	// Pre-render
	useEffect(() => {
		const themesInLocalStorage = getAllThemesFromLocalStorage("all-themes");
		loadThemes(themesInLocalStorage);
		getDefaultTheme(themesInLocalStorage.data.light);
		setActiveTheme(activeTheme || themesInLocalStorage.data.light);
		setLoadingState(false);
	}, []);

	const [loadingState, setLoadingState] = useState(true);
	// Validation
	arrayIsPopulated(loadingState, themes);

	function isActiveTheme() {
		if (activeTheme !== undefined || null || "") {
			return activeTheme;
		}
	}

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Front end web developer based in Leeds"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<style jsx global>
				{`
					body {
						background: ${isActiveTheme() ? activeTheme.colors.body : "white"};
						color: ${isActiveTheme() ? activeTheme.colors.text : "black"};
						transition: all 0.5s linear;
					}

					a {
						color: ${isActiveTheme() ? activeTheme.colors.text : "black"};
						cursor: pointer;
					}
					a::before {
						border: 2px solid
							${isActiveTheme() ? activeTheme.colors.text : "black"};
					}

					h2 {
						color: ${isActiveTheme() ? activeTheme.colors.text : "black"};
					}

					.navbar {
						background: ${isActiveTheme()
							? activeTheme.colors.navigation.background
							: "white"};
						color: ${isActiveTheme() ? activeTheme.colors.text : "black"};
					}
					.dropdown {
						border-top: 2px solid
							${isActiveTheme()
								? activeTheme.colors.navigation.dropdown
								: "white"};
					}

					.column {
						background: ${isActiveTheme() ? activeTheme.colors.body : "white"};
						outline: 1px solid
							${isActiveTheme() ? activeTheme.colors.border : "white"};
						border-right: solid 5px
							${isActiveTheme() ? activeTheme.colors.border : "white"};
					}
				`}
			</style>
			<>
				{home && (
					<>
						{home && <Header home pageName={pageName} />}
						<main>{children}</main>
					</>
				)}
				{inner && (
					<div className={styles.innerOverlay}>
						<div className={styles.horizontal_margin}></div>
						<div className={styles.vertical_margin}></div>
						{loading && !arrayIsPopulated && activeTheme !== undefined ? (
							<Spinner />
						) : (
							<>
								{inner && <Header inner pageName={pageName} />}
								<main className={styles.main}>{children}</main>
							</>
						)}
					</div>
				)}
			</>
		</>
	);
}
