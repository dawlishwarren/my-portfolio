import React from "react";
import PropTypes from "prop-types";
import styles from "./header.module.css";
import ThemeButton from "./navbarIcons/themeButton";
import HamburgerMenu from "./navbarIcons/hamburgerMenu";

const Header = ({ home, inner, pageName }) => {
	return (
		<header className={styles.header_container}>
			{home && (
				<div className={styles.home_container}>
					<ThemeButton />
				</div>
			)}
			{inner && (
				<div className={styles.inner_container}>
					<div className={styles.page_title}>
						<h3>{pageName}</h3>
					</div>
					<ul className={styles.navbar_items}>
						<li>
							<ThemeButton />
						</li>
						<li>
							<HamburgerMenu pageName={pageName} />
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

Header.propTypes = {
	home: PropTypes.bool,
	inner: PropTypes.bool,
	pageName: PropTypes.string,
};

export default Header;
