import Layout from "./components/layout/layout";
import Head from "next/head";

export default function Palettize() {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
					integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
					crossorigin="anonymous"></link>
			</Head>
			<Layout inner pageName={"Palettize"}></Layout>;
		</>
	);
}
