import React, { useContext, useState } from "react";
import Layout from "../layout/layout";
import styles from "./landingItems.module.css";
import ThemeContext from "../../../context/themeContext/theme-context";
import LandingInner from "./landingInner";
import aboutMe from "../../../img/about_me.jpg";
import blog from "../../../img/blog.jpeg";
import portfolio from "../../../img/portfolio.jpg";
import palette from "../../../img/palette.jpg";
import contact from "../../../img/contact.jpg";

const LandingItems = () => {
	const { activeTheme, loading } = useContext(ThemeContext);
	const [landingState, setState] = useState({
		activeObject: null,
		objects: [
			{
				id: 0,
				name: "About",
				header: "Who am I?",
				text: "I am a self-taught web dev who has come from a background in professional music, find out how I am taking my artistic inspirations to the field of technology",
				image: aboutMe,
			},
			{
				id: 1,
				name: "Blog",
				header: "What have I been up to?",
				text: "Follow my process as I learn technology stacks and find out how I made this website",
				image: blog,
			},
			{
				id: 2,
				name: "Portfolio",
				header: "Where can I see your work?",
				text: "See my work with detailed explanation as to what I have created",
				image: portfolio,
			},
			{
				id: 3,
				name: "Palettize",
				header: "Create intuitive colour palettes with ease!",
				text: "A simple app for building but also utilising colour palettes, as a bonus check out how you can edit my entire site",
				image: palette,
			},
			{
				id: 4,
				name: "Contact",
				header: "Get in touch",
				text: "Send me an enquiry or simply find my contact details to reach me",
				image: contact,
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
					// Column
					<div
						key={index}
						className={[setActiveObjectStyles(index)]}
						onClick={() => {
							setActiveObject(index);
						}}>
						{/* Conditional Header (not shown if column is active) */}
						{!(activeObject === objects[index]) && (
							<h2
								className={[
									styles.title,
									getAppropriateTitleRotationClass(index),
								].join(" ")}>
								{object.name}
							</h2>
						)}
						{/* Conditional Inner (only shown when column is active) */}
						{activeObjectExists() && activeObject === objects[index] && (
							<LandingInner data={activeObject} />
						)}
					</div>
				))}
			</div>
		</Layout>
	);
};

export default LandingItems;
