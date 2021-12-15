import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { navLinks } from '../../../utils/dataToMap';
import styles from './header.module.css';
import ThemeButton from '../navbar/themeButton';

const Header = ({ inner, themes, pageName }) => {
	function hideCurrentPageNav(name) {
		if (name == pageName) {
			return `${styles.hidden}`;
		}
	}
	return (
		<header>
			<div className={styles.header_container}>
				<div className={styles.page_title}>
					<h3>{pageName}</h3>
				</div>
				<div className={styles.navbar_items}>
					{inner && (
						<>
							{navLinks.map((link, index) => {
								return (
									<ul className={styles.navigation_list_item}>
										<Link href={link.path}>
											<li
												key={index}
												className={[hideCurrentPageNav(link.name)]}>
												{link.name}
											</li>
										</Link>
									</ul>
								);
							})}
						</>
					)}
					<ThemeButton />
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	inner: PropTypes.bool,
	themes: PropTypes.array.isRequired,
	pageName: PropTypes.string,
};

export default Header;
