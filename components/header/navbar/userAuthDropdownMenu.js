import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./navigation.module.css";

const userAuthDropdownMenu = (props) => {
	const { data: session, status } = useSession();

	return (
		<div className={[props.isOpen ? "open" : "", styles.dropdown].join(" ")}>
			<ul>
				{!status.loading && !session && (
					<li className={styles.nav_link}>
						<Link href="/api/auth/signin">
							<a
								className={styles.menu_item}
								onClick={(e) => {
									e.preventDefault();
									signIn("github");
								}}>
								Sign In to Github
							</a>
						</Link>
					</li>
				)}
				{session && (
					<li className={styles.nav_link}>
						<Link href="/api/auth/signout">
							<a
								className={styles.menu_item}
								onClick={(e) => {
									e.preventDefault();
									signOut("github");
								}}>
								Sign Out of Github
							</a>
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
};

export default userAuthDropdownMenu;
