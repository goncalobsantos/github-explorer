import styled from 'styled-components';
import { transparentize } from 'polished';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #a8a8b3;
		transition: color 0.2s;

		&:hover {
			color: #666;
		}

		svg {
			margin-right: 0.4rem;
		}
	}
`;

export const RepositoryInfo = styled.section`
	margin-top: 8rem;
	header {
		display: flex;
		align-items: center;

		img {
			width: 12rem;
			height: 12rem;
			border-radius: 50%;
		}

		div {
			margin-left: 2.4rem;

			.bold-text {
				font-size: 3.6rem;
				color: #3d3d4d;
				font-weight: 700;
			}

			p {
				font-size: 1.8rem;
				color: #737380;
				margin-top: 0.4rem;
			}
		}
	}

	ul  {
		display: flex;
		list-style: none;
		margin-top: 4rem;

		li {
			&:not(:last-child) {
				margin-right: 8rem;
			}

			.bold-text {
				font-size: 3.6rem;
				color: #3d3d4d;
				font-weight: 700;
			}

			span {
				display: block;
				margin-top: 0.4rem;
				color: #6c6c80;
			}
		}
	}
`;

export const Issues = styled.div`
	margin-top: 8rem;

	a {
		background: #fff;
		border-radius: 0.5rem;
		width: 100%;
		padding: 2.4rem;
		display: block;
		text-decoration: none;

		display: flex;
		align-items: center;

		transition: all 0.2s;

		&:not(:first-child) {
			margin-top: 1rem;
		}

		div {
			margin-left: 1.6rem;
			flex: 1;

			.bold-text {
				color: #3d3d4d;
				font-weight: 700;
				font-size: 1.8rem;
			}

			p {
				font-size: 1.4rem;
				color: #a8a8b3;
				margin-top: 0.4rem;
			}
		}

		svg {
			margin-left: auto;
			color: #cbcbd6;
		}

		&:hover {
			transform: translateX(1rem);
			box-shadow: 0 0.3rem 1rem ${transparentize(0.8, '#000')};
		}
	}
`;
