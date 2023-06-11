import styled from "styled-components";

export const ContainerDatail = styled.div`
	color: #fff;

	//background: #2c302e;
	display: grid;
	flex-direction: column;
	text-align: center;
	max-width: 600px;
	margin: 2rem auto;

	svg {
		font-size: 25px;
		color: #eb4a47;
	}
`;

export const TagLine = styled.p`
	text-align: center;
	font-size: 18px;
	margin-bottom: 20px;
	color: #dddfe3;
`;

export const Info = styled.div`
	margin: 0 auto;
	display: flex;
	text-align: center;
	font-size: 20px;
	margin-bottom: 20px;
	color: #dddfe3;

	h3 {
		display: flex;
		align-items: center;
		margin-right: 10px;
	}

	p {
		margin-right: 10px;
	}
`;

export const Description = styled.div`
	text-align: center;
	font-size: 18px;
	line-height: 20px;
	margin-bottom: 20px;
	color: #dddfe3;

	h3 {
		margin-bottom: 10px;
	}
`;
