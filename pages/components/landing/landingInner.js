import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./landingInner.module.css";
import Link from "next/link";
import Image from "next/image";
import ThemeContext from "../../../context/themeContext/theme-context";
// import { isActiveTheme } from "../../../utils/validation";

const landingInner = ({ data: { name, id, header, text, image } }) => {
	const { activeTheme, loading } = useContext(ThemeContext);

	function isActiveTheme() {
		if (activeTheme !== undefined || null || "") {
			return activeTheme;
		}
	}

	// Orientation functions
	function determineLeftOrRight(index) {
		if (index < 3) {
			return `${styles.left}`;
		} else return `${styles.right}`;
	}

	function determineOtherSide(index) {
		if (index < 3) {
			return `${[styles.right]}  ${[styles.other]}`;
		} else return `${[styles.left]}  ${[styles.other]}`;
	}

	function determineColumnLayout(index) {
		if (index < 3) {
			return `1fr 1.618fr`;
		} else return `1.618fr 1fr`;
	}

	return (
		<div className="card_container">
			{/* Left or Right */}
			<div className={determineLeftOrRight(id)}>
				<div className={styles.top_corner}></div>
				<div className={styles.textbox}>
					<h4>{header}</h4>
					<p>{text}</p>
				</div>
				<div className={styles.link_box}>
					<div className={styles.link_inner}>
						<Link href={name.toLowerCase()}>
							<a href="" className={styles.link}>
								{" "}
								&gt; More
							</a>
						</Link>
					</div>
				</div>
				<div className={styles.middle_with_lines}>
					<div className={styles.lines}></div>
				</div>
				<div className={styles.middle_color}></div>
				<div className={styles.bottom_corner}>
					<div className={styles.line}></div>
				</div>
			</div>
			{/* Other side */}
			<div className={determineOtherSide(id)}>
				<div className={styles.title}>
					<h2 className={styles.name}>{name}</h2>
				</div>
				<div className={styles.image_container}>
					<Image src={image} alt={name} layout="fill" />
				</div>
			</div>

			{/* Responsive grid container styles */}
			<style jsx>{`
				.card_container {
					display: grid;
					grid-template-columns: ${determineColumnLayout(id)};
					grid-template-rows: 100%;
					height: 100%;
					width: 100%;
					background-color: ${activeTheme.colors.border};
					grid-gap: 3px;
				}

				// Background colour handling
				.${styles.textbox},
					.${styles.link_box},
					.${styles.link_inner},
					.${styles.middle_with_lines},
					.${styles.bottom_corner},
					.${styles.other} {
					background-color: ${activeTheme.colors.body};
					border: ${activeTheme.colors.border};
				}

				// Detailing colour handling
				.${styles.line}, .${styles.lines}, .${styles.lines}::before {
					border-left: 6px solid ${activeTheme.colors.border};
				}

				.${styles.name}::before, .${styles.name}::after {
					border-top: 3px solid ${activeTheme.colors.border};
				}

				// Accent colour handling
				.${styles.top_corner} {
					background-color: ${activeTheme.colors.accent.secondary};
				}
				.${styles.middle_color} {
					background-color: ${activeTheme.colors.accent.primary};
				}
			`}</style>
		</div>
	);
};

landingInner.propTypes = {
	data: PropTypes.object.isRequired,
};

export default landingInner;
