import Layout from "./components/layout/layout";
import Head from "next/head";
import PortfolioCarousel from "./components/portfolioPage/portfolioCarousel";

export default function Portfolio() {
	return (
		<Layout inner pageName={"Portfolio"}>
			<PortfolioCarousel />
		</Layout>
	);
}
