<<<<<<< HEAD
import { Container } from '@mui/material';
import styled from 'styled-components';

export const SelectorContainer = styled.div`
	display: flex;
	width: 100%;
	height: 150px;
	flex-direction: column;
	justify-content: space-evenly;
	border: 4px solid #fff;
	border-radius: 33px;
	background-color: #fafafa;
	box-shadow: -20px -20px 66px rgba(0, 0, 0, 0.05);
	position: relative;

	& button {
		position: absolute;
		border-radius: 50%;
		top: calc(50% - 30px);
		background-color: #29cd9c;
		border: none;
		width: 60px;
		height: 60px;
		font-size: 2rem;
		color: #fff;
		box-shadow: 0px 16px 26px rgba(41, 250, 156, 0.3);
	}

	& .left {
		left: -30px;
	}

	& .right {
		right: -30px;
	}
`;

export const FasesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

export const StepActive = styled.div<Props>`
	width: ${props => props.width};
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;

	& img {
		width: ${props => props.imageWidth || '30px'};
		transition: all 0.5s ease-in-out;
		align-self: center;
		position: relative;
		top: ${props => props.top || '0'};
	}

	& h3 {
		color: ${props => props.color || '#959595'};
		font-size: 1.5rem;
		font-weight: ${props => props.fontWeight || '300'};
		margin: 1rem 0 0 0;
		transition: all 0.5s ease-in-out;
	}
`;

export const ProgressBar = styled.div`
	width: 90%;
	height: 5px;
	background-color: #ededed;
	border-radius: 50px;
	bottom: 1rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	align-self: center;
	position: absolute;
`;
interface Props {
	width?: string;
	imageWidth?: string;
	color?: string;
	fontWeight?: string;
	top?: string;
}

export const ProgressBarContend = styled.div<Props>`
	width: ${props => props.width};
	height: 5px;
	background-color: #29cd9c;
	border-radius: 50px;
	bottom: 0;
	transition: all 0.5s ease-in-out;
`;
=======
import styled from 'styled-components';

export const SelectorContainer = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: column;
  justify-content: space-evenly;
  border: 4px solid #fff;
  border-radius: 33px;
  background-color: #fafafa;
  box-shadow: -20px -20px 66px rgba(0, 0, 0, 0.05);
  position: relative;

  & button {
    position: absolute;
    border-radius: 50%;
    top: calc(50% - 30px);
    background-color: #29CD9C;
    border: none;
    width: 60px;
    height: 60px;
    font-size: 2rem;
    color: #fff;
    box-shadow: 0px 16px 26px rgba(41, 250, 156, 0.3);
  }

  & .left {
    left: -30px;
  }

  & .right {
    right: -30px;
  }

`

export const FasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

`

export const StepActive = styled.div<Props>`
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
  margin-botton: 1rem;

  & img {
    width: ${props => props.imageWidth || '30px'}; 
    transition: all 0.5s ease-in-out;
    align-self: center;
    position: relative;
    top: ${props => props.top || '0'};
  }

  & h3 {
    color: ${props => props.color || '#959595'};
    font-size: 1.5rem;
    font-weight: ${props => props.fontWeight || '300'};
    margin: 1rem 0 0 0;
    transition: all 0.5s ease-in-out;
  }

`



export const ProgressBar = styled.div`
  width: 90%;
  height: 5px;
  background-color: #EDEDED;
  border-radius: 50px;
  bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  position: absolute;
` 
interface Props {
  width?: string;
  imageWidth?: string;
  color?: string;
  fontWeight?: string;
  top?: string;
}

export const ProgressBarContend = styled.div<Props>`
  width: ${props => props.width};
  height: 5px;
  background-color: #29CD9C;
  border-radius: 50px;
  bottom: 0;
  transition: all 0.5s ease-in-out;

`



>>>>>>> 7507288c28401b000720e0dd68f2686998c3aeec
