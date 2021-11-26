import { useState, useEffect, useContext } from "react";
import { getAllThemesFromLocalStorage } from "../../../utils/localStorage";
import Spinner from "../spinner/spinner";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeContext from "../../../context/themeContext/theme-context";
import { arrayIsPopulated } from "../../../utils/validation";

export default function Navbar({ home, inner, themes }) {
	// Sets global theme

	const { setActiveTheme, loading, getThemes } = useContext(ThemeContext);

	const [navbarState, setState] = useState({
		colorThemes: [],
		activeTheme: "",
		navbarLoading: true,
	});

	const { colorThemes } = navbarState;

	//////////////// This is how I've got it to work but I wonder if pulling from local storage is a clunky way to implement
	//////////////// Console log shows that the themes passed in as a prop from layout.js is clearly readable
	//////////////// But when I try to set that array to be mapped it has issues rendering
	console.log(themes);
	useEffect(() => {
		// Get all available themes
		const allThemes = getAllThemesFromLocalStorage("all-themes");
		const themesToArray = [];

		// Populate an array with them
		for (var i in allThemes) {
			themesToArray.push([i, allThemes[i]]);
		}

		const contextThemes = getThemes();
		console.log(contextThemes);

		const loadedThemes = Object.values(themesToArray[0][1]);

		setState({
			...navbarState,
			colorThemes: loadedThemes,
			navbarLoading: false,
		});
	}, []);

	// useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 		if (arrayIsPopulated(navbarState, themes)) {
	// 			let data = themes[0];
	// 			setNavbarState({ ...navbarState, colorThemes: data });
	// 		}
	// 	}, 500);
	// }, []);

	// 	// // Push to
	// 	// const themesArray = Object.values(themesToArray[0][1]);
	// 	if (themes && !loading) {
	// 		let themesToArray = [];
	// 		for (var i in themes) {
	// 			themesToArray.push([i], themes[i]);
	// 		}

	// 		const loadedThemes = Object.values(themesToArray[0][1]);

	// 		setState({
	// 			...navbarState,
	// 			colorThemes: loadedThemes,
	// 			navbarLoading: false,
	// 		});
	// 	}
	// }, [setState]);

	// console.log(colorThemes, themes[0]);

	// useEffect(() => {
	// 	let timer = setTimeout(() => setLoading(true), 1000);
	// 	if (arrayIsPopulated(!loading, themes)) {
	// 		const themesToArray = [];
	// 		for (var i in themes) {
	// 			themesToArray.push([i, themes[i]]);
	// 		}

	// 		const themesArray = Object.values(themesToArray[0][1]);
	// 		setState({ ...navbarState, loading: false, colorThemes: themesArray });
	// 		setLoading(false);
	// 		return () => clearTimeout(timer);
	// 	} else {
	// 		console.log("Not loaded");
	// 	}
	// }, []);

	function setNavbarActiveTheme(index) {
		setActiveTheme(colorThemes[index]);
		setState({
			...navbarState,
			activeTheme: colorThemes[index],
		});
	}
	return (
		<>
			{loading && !colorThemes && navbarLoading ? (
				<Spinner />
			) : (
				<div className={styles.navbar}>
					<ul className={styles.navbar_nav}>
						<li className={`${[styles.nav_item]} ${[styles.has_dropdown]}`}>
							<a href="#">Theme</a>
							<ul className={styles.dropdown}>
								{navbarState.colorThemes.map((theme, index) => (
									<li className={styles.dropdown_item} key={theme.id}>
										<a href="#" onClick={() => setNavbarActiveTheme(index)}>
											{theme.title}
										</a>
									</li>
								))}
							</ul>
						</li>
						{!home && (
							<>
								<li className={`${[styles.nav_item]}`}>
									<Link href="/">
										<a href="">Home</a>
									</Link>
								</li>
								<li className={`${[styles.nav_item]}`}>
									<Link href="/">
										<a href="">Contact</a>
									</Link>
								</li>
								<li className={`${[styles.nav_item]}`}>
									<Link href="/">
										<a href="">Blog</a>
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			)}
		</>
	);
}
