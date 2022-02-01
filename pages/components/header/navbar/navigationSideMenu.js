import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './navigation.module.css';
import { navLinks } from '../../../../utils/dataToMap';
import ThemeContext from '../../../../context/themeContext/theme-context';
import Spinner from '../../spinner/spinner';

const NavigationSideMenu = (props) => {
	const { activeTheme, loading } = useContext(ThemeContext);
	const [menuState, setState] = useState({
		menuItems: [],
		currentPage: '',
	});

	useEffect(() => {
		hideCurrentPageNav(props.name);
	}, []);

	function hideCurrentPageNav(currentPageName) {
		const filtered = navLinks.filter(
			(navLink) => navLink.name != currentPageName
		);
		setState({
			...menuState,
			menuItems: filtered,
			currentPage: props.name,
		});
	}

	// function lighterOrDarker(theme) {}

	const { menuItems } = menuState;
	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div
					className={[
						styles.sidenav_container,
						props.isOpen ? `${styles.open}` : '',
					].join(' ')}>
					<a
						href='#'
						className={styles.close_button}
						onClick={() => props.setMenuStatus(!props.isOpen)}>
						X
					</a>
					<ul>
						{menuItems.map((link, index) => {
							return (
								<Link href={link.path}>
									<li className={styles.nav_links} key={index}>
										<p>{link.name}</p>
									</li>
								</Link>
							);
						})}
					</ul>
				</div>
			)}
			<style jsx>{`
				.${styles.sidenav_container} {
					background-color: ${activeTheme.colors.navigation.dropdown};
					border-left: ${activeTheme.colors.border} 1px solid;
					box-shadow: -1px 0px 0px 2px ${activeTheme.colors.border};
				}
                .${styles.sidenav_container}:hover {
                    box-shadow: -1px 0 2px 3px ${activeTheme.colors.border};
                }
				.${styles.nav_links} {
					border-bottom: 1px solid ${activeTheme.colors.border};
					color: ${activeTheme.colors.text};
				} 
				.${styles.nav_links}:hover {
					background: ${activeTheme.colors.border};
					color: ${activeTheme.colors.body};
				}}
			`}</style>
			{/* TODO: implement a light/dark switch to return higher or lower brightness on hover depending on brightness of theme */}
		</>
	);
};

export default NavigationSideMenu;
