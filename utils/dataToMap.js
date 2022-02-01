import aboutMe from "../img/about_me.jpg";
import blog from "../img/blog.jpeg";
import portfolio from "../img/portfolio.jpg";
import palette from "../img/palette.jpg";
import contact from "../img/contact.jpg";
import code from "../img/code.jpg";
import icon from "../img/icon.jpg";
import nutrition from "../img/nutrition.jpg";
import saxophone from "../img/saxophone.jpg";
import town from "../img/town.jpg";

export const navLinks = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Blog", path: "/blog" },
	{ name: "Portfolio", path: "/portfolio" },
	{ name: "Palettize", path: "/palettize" },
	{ name: "Contact", path: "/contact " },
];

export const landingItemData = [
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
];

export const learningTimeline = [
	{
		title: "April 2020: Started HTML and CSS courses",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates fuga, labore veniam libero tempore velit esse atemporibus, impedit excepturi sed rerum magnam nisi dolorfugiat totam quibusdam porro nihil",
	},
	{
		title: "May 2020: Started JavaScript course",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates fuga, labore veniam libero tempore velit esse atemporibus, impedit excepturi sed rerum magnam nisi dolorfugiat totam quibusdam porro nihil",
	},
	{
		title: "August 2020: Began learning React.js",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates fuga, labore veniam libero tempore velit esse atemporibus, impedit excepturi sed rerum magnam nisi dolorfugiat totam quibusdam porro nihil",
	},
	{
		title: "February 2022: Learned how bloody next works",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates fuga, labore veniam libero tempore velit esse atemporibus, impedit excepturi sed rerum magnam nisi dolorfugiat totam quibusdam porro nihil",
	},
];

export const portfolioCarouselData = [
	{ image: code, index: 0 },
	{ image: icon, index: 1 },
	{ image: nutrition, index: 2 },
	{ image: saxophone, index: 3 },
	{ image: town, index: 4 },
];
