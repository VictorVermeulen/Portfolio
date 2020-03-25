const projects = [
	{
		key: 1,
		title: 'Meditation App',
		image: './images/meditation.png',
		description:
			'I created the meditation app with React Native, using the Expo SDK. To watch a video of me explaining the app and the code, please visit the code link. If you have Android and want to download Expo Client, feel free to test the app yourself using the website link.',
		code: 'https://vimeo.com/386471448',
		website: 'https://expo.io/@victorvermeulen/meditation'
	},
	{
		key: 2,
		title: 'Website Tennis Trainer',
		image: './images/tennis.jpg',
		description:
			'For this website I used Gatsby because the fast page load time it provides and Chakra-UI for the components. I connected the site with Contentful so the owner can easily post events himself without having to touch any code. Finally, I did host the site with Netlify which provides the owner with the option to download all form signups in Excel, which helps with efficiency.',
		code: '',
		website: 'https://www.jslp-academy.nl/'
	},

	{
		key: 3,
		title: 'Bitcoin Ticker',
		image: './images/bitcoin.jpg',
		description:
			'For this Bitcoin ticker I used server side rendering with the web framework Express for Node.js. To do this, I used the API from bitcoinaverage.com. The project is deployed on Heroku.',
		code: '',
		website: 'https://enigmatic-meadow-57316.herokuapp.com/'
	},
	{
		key: 4,
		title: 'Signup to My Newsletter',
		image: './images/penpaper.jpg',
		description:
			'This is another project I did to practise with Express, NodeJS and the use of an API (MailChimp).',
		code: '',
		website: 'https://young-garden-41666.herokuapp.com/'
	},
	{
		key: 5,
		title: 'Personal Portfolio',
		image: './images/portfolio.jpg',
		description:
			'I decided to create this portfolio using React & Material-UI as practise.',
		code: 'https://github.com/VictorVermeulen/Portfolio/tree/master',
		website: ''
	},
	{
		key: 6,
		title: 'Investment Portfolio Advisor',
		image: './images/money.jpg',
		description:
			'When I did some calculations for my own portfolio, I figured it would be useful and a nice project to have my own website for it. I used Bootstrap for the front end and used some basic Javascript to do the calculations for me.',
		code: 'https://codepen.io/victorvermeulen/pen/orrLER',
		website: 'https://codepen.io/victorvermeulen/full/orrLER'
	}
];

export default projects;
