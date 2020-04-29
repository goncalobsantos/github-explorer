import { createGlobalStyle } from 'styled-components';

import githubBg from '../assets/github-bg.svg';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html {
		font-size: 62.5%
	}

	body {
		background: #f0f0f5 url(${githubBg}) no-repeat 70% top;
		-webkit-font-smoothing: anti-aliased;
	}

	body, input, button {
		font-size: 1.6rem ;
		font-family: 'Montserrat', sans-serif;
	}

	#root {
		max-width: 96rem;
		margin: 0 auto;
		padding: 4rem 2rem;
	}

	button {
		cursor: pointer;
	}
`;
