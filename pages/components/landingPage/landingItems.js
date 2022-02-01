import React, { useContext, useState, useEffect } from 'react';
import Layout from '../layout/layout';
import styles from './landingItems.module.css';
import ThemeContext from '../../../context/themeContext/theme-context';
import LandingInner from './landingInner';
import { landingItemData } from '../../../utils/dataToMap';

const LandingItems = () => {
	// State management
	// Loading the theme context
	const { activeTheme, loading } = useContext(ThemeContext);

	// Setting component state
	const [landingState, setState] = useState({
		activeObject: null,
		objects: [],
	});
	const { activeObject, objects } = landingState;

	// Importing the array of data to be mapped
	useEffect(() => {
		setState({
			...landingState,
			objects: landingItemData,
		});
	}, [setState]);

	////// Local methods //////
	// Active object setting and styling
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
			return `${styles.rotateZero}`;
		} else return `${styles.rotateOneEighty}`;
	}

	function activeObjectExists() {
		return landingState && activeObject;
	}

	function isActiveTheme() {
		if (activeTheme !== undefined || null || '') {
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
								: 'black'}
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
								].join(' ')}>
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
