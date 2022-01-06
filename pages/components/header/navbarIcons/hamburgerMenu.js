import React from "react";
import Link from "next/link";
import { navLinks } from "../../../../utils/dataToMap";
import propTypes from "prop-types";
import styles from "./navigation.module.css";

const hamburgerMenu = ({ pageName }) => {
	function hoverAnimation() {}
	function hideCurrentPageNav(name) {
		if (name == pageName) {
			return `display: hidden`;
		}
	}
	return (
		<ul className={styles.icons}>
			<div className={styles.burger}>
				<div className={styles.line} />
				<div className={styles.line} />
				<div className={styles.line} />
			</div>
			{navLinks.map((link, index) => {
				return (
					<ul className={styles.nav_links}>
						<Link href={link.path}>
							<li key={index}>{link.name}</li>
						</Link>
					</ul>
				);
			})}
		</ul>
	);
};

hamburgerMenu.propTypes = {
	pageName: propTypes.string,
};

export default hamburgerMenu;
