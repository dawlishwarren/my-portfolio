import React from "react";
import styles from "./about.module.css";
import { learningTimeline } from "../../../utils/dataToMap";

const EducationTimeline = () => {
	return (
		<div className={styles.timeline_container}>
			<h2 className={styles.title}>Development Journey</h2>
			<section className={styles.timeline}>
				<ul>
					{learningTimeline.map((timelineObject, index) => {
						const { title, text } = timelineObject;
						return (
							<li className={styles.line} key={index}>
								<div>
									<h3>
										<i className="fas fa-chevron-right"></i>
										{title}
									</h3>
									<p>{text}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
		</div>
	);
};

export default EducationTimeline;
