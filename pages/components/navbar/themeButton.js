import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../../context/themeContext/theme-context';
import styles from './themeButton.module.css';
import { getAllThemesFromLocalStorage } from '../../../utils/localStorage';
import Spinner from '../spinner/spinner';

function ThemeButton() {
	const { setActiveTheme, loading, getThemes } = useContext(ThemeContext);

	const [themeButtonState, setState] = useState({
		colorThemes: [],
		activeTheme: '',
		themeButtonLoading: true,
	});

	useEffect(() => {
		// Get all available themes
		const allThemes = getAllThemesFromLocalStorage('all-themes');
		const themesToArray = [];

		// Populate an array with them
		for (var i in allThemes) {
			themesToArray.push([i, allThemes[i]]);
		}

		const loadedThemes = Object.values(themesToArray[0][1]);

		setState({
			...themeButtonState,
			colorThemes: loadedThemes,
			themeButtonLoading: false,
		});
	}, []);

	function setButtonActiveTheme(index) {
		setActiveTheme(colorThemes[index]);
		setState({
			...themeButtonState,
			activeTheme: colorThemes[index],
		});
	}

	const { colorThemes } = themeButtonState;

	return (
		<>
			{loading && !colorThemes && navbarLoading ? (
				<Spinner />
			) : (
				<li className={`${[styles.nav_item]} ${[styles.has_dropdown]}`}>
					<a href='#' className={styles.button}>
						Theme
					</a>
					<ul className={styles.dropdown}>
						{themeButtonState.colorThemes.map((theme, index) => (
							<li className={styles.dropdown_item} key={theme.id}>
								<a href='#' onClick={() => setButtonActiveTheme(index)}>
									{theme.title}
								</a>
							</li>
						))}
					</ul>
				</li>
			)}
			;
		</>
	);
}

export default ThemeButton;
