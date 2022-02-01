import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../../../context/themeContext/theme-context';
import { getAllThemesFromLocalStorage } from '../../../../utils/localStorage';
import styles from './navigation.module.css';

const ThemesDropdownMenu = (props) => {
	const { setActiveTheme, activeTheme, loading } = useContext(ThemeContext);
	const [themeState, setState] = useState({
		colorThemes: [],
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

		// Update state
		setState({
			...themeState,
			colorThemes: loadedThemes,
			themeButtonLoading: false,
		});
	}, []);

	function setButtonActiveTheme(index) {
		setActiveTheme(colorThemes[index]);
	}

	const { colorThemes } = themeState;
	return (
		<>
			{loading && !colorThemes ? (
				<Spinner />
			) : (
				<div
					className={[props.isOpen ? 'open' : '', styles.dropdown].join(' ')}>
					{themeState.colorThemes.map((theme, index) => (
						<li key={theme.id} className={styles.menu_item}>
							<a href='#' onClick={() => setButtonActiveTheme(index)}>
								{theme.title}
							</a>
						</li>
					))}
				</div>
			)}
			<style jsx>{`
				.${styles.dropdown} {
					background-color: ${activeTheme.colors.body};
					border: ${activeTheme.colors.border} 2px solid;
				}
				.${styles.menu_item} {
					border-bottom: ${activeTheme.colors.border} dashed 1px;
				}
				.${styles.menu_item} a::before {
					background-color: ${activeTheme.colors.accent.secondary};
				}
			`}</style>
		</>

		// Style JSX: Icon button color background, dropdown border, background, menuitem before
	);
};
export default ThemesDropdownMenu;
