import Image from "next/image";
import React, { useState, useEffect } from "react";
import { portfolioCarouselData } from "../../../utils/dataToMap";
import styles from "./portfolio.module.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const PortfolioCarousel = () => {
	const [slideState, setSlideState] = useState({
		currentSlide: null,
		previousSlide: null,
		nextSlide: null,
	});
	const length = portfolioCarouselData.length;
	useEffect(() => {
		setSlideState({
			...slideState,
			previousSlide: length - 1,
			currentSlide: 0,
			nextSlide: 1,
		});
	}, []);

	const { currentSlide, previousSlide, nextSlide } = slideState;

	function toPreviousSlide() {
		setSlideState({
			...slideState,
			previousSlide: previousSlide === 0 ? length - 1 : previousSlide - 1,
			currentSlide: currentSlide === 0 ? length - 1 : currentSlide - 1,
			nextSlide: nextSlide === 0 ? length - 1 : nextSlide - 1,
		});
	}
	function toNextSlide() {
		setSlideState({
			...slideState,
			previousSlide: previousSlide === length - 1 ? 0 : previousSlide + 1,
			currentSlide: currentSlide === length - 1 ? 0 : currentSlide + 1,
			nextSlide: nextSlide === length - 1 ? 0 : nextSlide + 1,
		});
	}
	if (
		!Array.isArray(portfolioCarouselData) ||
		portfolioCarouselData.length <= 0
	) {
		return null;
	}
	return (
		<section className={styles.carousel_container}>
			<div className={styles.carousel}>
				<FaArrowAltCircleLeft
					className={styles.left_arrow}
					onClick={toPreviousSlide}
				/>
				<FaArrowAltCircleRight
					className={styles.right_arrow}
					onClick={toNextSlide}
				/>
				{/* Previous Slide */}
				{portfolioCarouselData
					.filter((data) => data.index === previousSlide)
					.map((slide) => (
						<div
							className={[styles.slide, styles.previous_slide].join(" ")}
							key={slide.index}>
							<Image
								src={slide.image}
								layout="responsive"
								width={1.618}
								height={1}
								className={styles.image}></Image>
						</div>
					))}
				{/* Current Slide */}
				{portfolioCarouselData
					.filter((data) => data.index === currentSlide)
					.map((slide) => (
						<div
							className={[styles.slide, styles.active].join(" ")}
							key={slide.index}>
							<Image
								src={slide.image}
								layout="responsive"
								width={1.618}
								height={1}
								className={styles.image}></Image>
						</div>
					))}
				{/* Next Slide */}
				{portfolioCarouselData
					.filter((data) => data.index === nextSlide)
					.map((slide) => (
						<div
							className={[styles.slide, styles.next_slide].join(" ")}
							key={slide.index}>
							<Image
								src={slide.image}
								layout="responsive"
								width={1.618}
								height={1}
								className={styles.image}></Image>
						</div>
					))}
			</div>
		</section>
	);
};

export default PortfolioCarousel;
