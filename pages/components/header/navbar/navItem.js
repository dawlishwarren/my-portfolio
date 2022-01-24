import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styles from "./navigation.module.css";
import ThemeContext from "../../../../context/themeContext/theme-context";

const NavItem = (props) => {
	const { activeTheme, loading } = useContext(ThemeContext);
	const [open, setOpen] = useState(false);
	return (
		<>
			{!loading && (
				<>
					<li className={styles.nav_item}>
						<a
							href="#"
							className={styles.icon_button}
							onClick={() => setOpen(!open)}>
							{props.icon}
						</a>

						{open && props.children}
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

NavItem.propTypes = {};

export default NavItem;
