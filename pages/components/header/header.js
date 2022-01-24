import React, { useContext } from "react";
import ThemeContext from "../../../context/themeContext/theme-context";
import PropTypes from "prop-types";
import styles from "./header.module.css";
import Navbar from "./navbar/navbar";
import NavItem from "./navbar/navItem";
import NavigationMenu from "./navbar/navigationMenu";
import ThemesDropdownMenu from "./navbar/themesDropdownMenu";

const Header = ({ home, inner, pageName }) => {
	const { activeTheme, loading } = useContext(ThemeContext);
	return (
		<header className={styles.header_container}>
			{home && (
				<div className={styles.home_container}>
					{/* <ThemeButton /> */}
					<h4>Home</h4>
				</div>
			)}
			{inner && !loading && (
				<>
					<div className={styles.inner_container}>
						<div className={styles.page_title}>
							<h3>{pageName}</h3>
						</div>
						<Navbar>
							<NavItem icon={<i className={`fas fa-palette `}></i>}>
								<ThemesDropdownMenu />
							</NavItem>
							<NavItem icon={<i className={"fas fa-bars"}></i>}>
								<NavigationMenu name={pageName} />
							</NavItem>
						</Navbar>
					</div>
					<style jsx>{`
						.${styles.inner_container} {
							border-bottom: 6px solid ${activeTheme.colors.border};
						}
					`}</style>
				</>
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
