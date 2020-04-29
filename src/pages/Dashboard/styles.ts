import styled, { css } from 'styled-components';
import { shade, transparentize } from 'polished';

interface FormProps {
	hasError: boolean;
}

export const Title = styled.h1`
	font-size: 4.8rem;
	color: #3a3a3a;
	max-width: 52rem;
	line-height: 5.6rem;
	margin-top: 8rem;
`;

export const Form = styled.form<FormProps>`
	margin-top: 4rem;
	max-width: 70rem;
	display: flex;

	input {
		flex: 1;
		height: 7rem;
		padding: 0 2.4rem;
		border: 2px solid #fff;
		${(props) =>
			props.hasError &&
			css`
				border: 2px solid #c53030;
			`}
		border-radius: 0.5rem 0 0 0.5rem;
		color: #3a3a3a;

		&::placeholder {
			color: #a8a8b3;
		}

		&:focus {
			outline: none;
			border-bottom: 3px solid #a8a8b3;
		}
	}

	button {
		width: 21rem;
		height: 7rem;
		background: #04d361;
		border-radius: 0 0.5rem 0.5rem 0;
		border: 0;
		color: #fff;
		font-weight: 700;
		transition: background-color 0.2s;

		&:hover {
			background: ${shade(0.2, '#04d361')};
		}

		&:focus {
			outline: none;
			border: 3px solid ${shade(0.2, '#04d361')};
		}
	}
`;

export const Repositories = styled.div`
	margin-top: 8rem;
	max-width: 70rem;

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

		img {
			width: 6.4rem;
			height: 6.4rem;
			border-radius: 50%;
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

export const Error = styled.span`
	display: block;
	color: #c53030;
	margin-top: 0.8rem;
`;
