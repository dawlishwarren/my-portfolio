import React from "react";
import styles from "./about.module.css";

const AboutInfo = () => {
	return (
		<>
			<h2 className={styles.title}>Background</h2>
			<div className={styles.golden_grid}>
				<div className={styles.primary_textbox}>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
						cupiditate fuga nobis quibusdam ab consectetur fugiat, consequatur
						unde eveniet tempora voluptas eum iure nisi itaque voluptatum quod
						assumenda exercitationem ea quam a. Atque quae nobis nulla ad
						praesentium delectus pariatur?
					</p>
				</div>
				<div className={styles.secondary_textbox}>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
						asperiores et. Fugiat veniam cum reprehenderit libero quasi est odit
						neque?
					</p>
				</div>
				<div className={styles.inner_grid}>
					<div className={styles.black_box}></div>
					<div className={styles.rectangle}></div>
					<div className={styles.smallest_square}></div>
				</div>
			</div>
		</>
	);
};

export default AboutInfo;
