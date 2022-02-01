import React, { useContext, useState } from 'react';
import styles from './navigation.module.css';
import ThemeContext from '../../../../context/themeContext/theme-context';

const NavItem = (props) => {
	const { activeTheme, loading } = useContext(ThemeContext);
	return (
		<>
			{!loading && (
				<>
					<li className={styles.nav_item}>
						<a
							href='#'
							className={styles.icon_button}
							onClick={() => {
								props.setMenuStatus(!props.isOpen);
							}}>
							{props.icon}
						</a>

						{props.isOpen && props.children}
					</li>
					<style jsx>{`
						.${styles.icon_button} {
							color: ${activeTheme.colors.border};
							background-color: ${activeTheme.colors.body};
							border: 2px solid ${activeTheme.colors.border};
						}
					`}</style>
				</>
			)}
		</>
	);
};

export default NavItem;
