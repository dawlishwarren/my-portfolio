import React, { useContext, useState } from "react";
import ThemeContext from "../../context/themeContext/theme-context";
import PropTypes from "prop-types";
import styles from "./header.module.css";
import Navbar from "./navbar/navbar";
import NavItem from "./navbar/navItem";
import NavigationSideMenu from "./navbar/navigationSideMenu";
import ThemesDropdownMenu from "./navbar/themesDropdownMenu";

const Header = ({ home, inner, pageName }) => {
	const { activeTheme, loading } = useContext(ThemeContext);
	const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
	const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
	return (
		<header className={styles.header_container}>
			{home && !loading && (
				<div className={styles.home_container}>
					<Navbar>
						<NavItem
							icon={<i className={`fas fa-palette `}></i>}
							isOpen={isColorMenuOpen}
							setMenuStatus={setIsColorMenuOpen}>
							<ThemesDropdownMenu setMenuStatus={setIsColorMenuOpen} />
						</NavItem>
					</Navbar>
				</div>
			)}
			{inner && !loading && (
				<>
					<div className={styles.inner_container}>
						<div className={styles.page_title}>
							<h3>{pageName}</h3>
						</div>
						<Navbar>
							<NavItem
								icon={<i className={`fas fa-palette `}></i>}
								isOpen={isColorMenuOpen}
								setMenuStatus={setIsColorMenuOpen}>
								<ThemesDropdownMenu setMenuStatus={setIsColorMenuOpen} />
							</NavItem>
							<NavItem
								icon={<i className={"fas fa-bars"}></i>}
								isOpen={isNavMenuOpen}
								setMenuStatus={setIsNavMenuOpen}>
								<NavigationSideMenu
									name={pageName}
									setMenuStatus={setIsNavMenuOpen}
									isOpen={isNavMenuOpen}
								/>
							</NavItem>
						</Navbar>
					</div>
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
