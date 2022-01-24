import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navigation.module.css";
import { navLinks } from "../../../../utils/dataToMap";
import ThemeContext from "../../../../context/themeContext/theme-context";

const NavigationMenu = ({ name }) => {
	const { activeTheme, loading } = useContext(ThemeContext);
	const [menuState, setState] = useState({
		menuItems: [],
		currentPage: "",
	});

	useEffect(() => {
		setState({
			...menuState,
			menuItems: navLinks,
			currentPage: name,
		});
	}, []);

	function hideCurrentPageNav(name) {
		if (name == menuState.currentPage) {
			return false;
		} else return true;
	}
	return (
		<>
			{!loading && (
				<div className={styles.sidenav_container}>
					<a href="" className={styles.close_button}>
						X
					</a>
					<ul>
						{navLinks.filter(hideCurrentPageNav()).map((link, index) => {
							return (
								<li className={styles.nav_links} key={index}>
									<Link href={link.path}>
										<p>{link.name}</p>
									</Link>
								</li>
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
                }}
			`}</style>
		</>
	);
};

export default NavigationMenu;
