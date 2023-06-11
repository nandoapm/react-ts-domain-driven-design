import styled from "styled-components";

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background-color: #eb4a47;

	h2,
	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	form {
		display: flex;
		gap: 0.5rem;

		input {
			padding: 0.2rem 0.8rem;
			border-radius: 4px;
			border: none;
		}

		button {
			background-color: #dddfe3;
			border: 2px solid #dddfe3;
			border-radius: 4px;
			color: #2c302e;
			padding: 0.3rem;
			font-size: 1.3rem;
			display: flex;
			align-items: center;
			cursor: pointer;
		}
	}
`;
