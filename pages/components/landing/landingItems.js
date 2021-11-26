import React, { useContext, useState } from "react";
import Link from "next/link";
import Layout from "../layout/layout";
import styles from "./landingItems.module.css";
import ThemeContext from "../../../context/themeContext/theme-context";

const LandingItems = () => {
	const { activeTheme, loading } = useContext(ThemeContext);
	const [landingState, setState] = useState({
		activeObject: null,
		objects: [
			{
				id: 0,
				name: "About",
			},
			{
				id: 1,
				name: "Blog",
			},
			{
				id: 2,
				name: "Portfolio",
			},
			{
				id: 3,
				name: "Palettize",
			},
			{
				id: 4,
				name: "Contact",
			},
		],
	});

	const { activeObject, objects } = landingState;

	const setActiveObject = (index) => {
		setState({ ...landingState, activeObject: objects[index] });
	};
	const setActiveObjectStyles = (index) => {
		if (objects[index] === activeObject) {
			return `${[styles.column]}  ${[styles.active]} column`;
		} else {
			return `${[styles.column]}  ${[styles.inactive]} column`;
		}
	};

	function getAppropriateTitleRotationClass(index) {
		if (activeObjectExists() && activeObject.id < index + 1) {
			// add rotate 0
			return `${styles.rotateZero}`;
		} else if (activeObjectExists() && activeObject.id > index + 1) {
			// rotate 180
		}
		return `${styles.rotateOneEighty}`;
	}

	function activeObjectExists() {
		return landingState && activeObject;
	}

	function isActiveTheme() {
		if (activeTheme !== undefined || null || "") {
			return activeTheme;
		}
	}
	return (
		<Layout home>
			<div className={styles.container}>
				<style jsx>{`
					.${styles.container} {
						border: ${!loading && isActiveTheme()
								? activeTheme.colors.border
								: "black"}
							solid 5px;
					}
				`}</style>
				{objects.map((object, index) => (
					<div
						key={index}
						className={[setActiveObjectStyles(index)]}
						onClick={() => {
							setActiveObject(index);
						}}>
						<h2
							className={[
								styles.title,
								getAppropriateTitleRotationClass(index),
							].join(" ")}>
							{object.name}
						</h2>
						<Link href={object.name.toLowerCase()}>
							<a href="">{object.name}</a>
						</Link>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default LandingItems;
