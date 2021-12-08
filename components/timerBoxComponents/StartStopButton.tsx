import { MouseEventHandler } from "react";
import styled from "styled-components";

const StyledStartStopButtonWrapper = styled.section`
  width: 100%;
  height: 35%;
  text-align: center;
  display: flex;
  align-items: center;
`;

const StyledStartStopButton = styled.button<{ color: string }>`
  width: 60%;
  height: 60%;
  margin: auto;
  border-radius: 7.5px;
  background-color: inherit;
  border: 1px #fff solid;
  color: ${(props) => props.color};
  background-color: #fff;
  box-shadow: rgb(235, 235, 235) 0px 8px 0px;
  font-size: 30px;
  font-weight: 900;
  :hover {
    background-color: #fff;
    cursor: pointer;
  }
  :active {
    transform: translateY(8px);
    box-shadow: none;
    outline: none;
  }
  transition: color 0.7s ease;
`;

interface IProps {
  startStop: string;
  startStopHandler: MouseEventHandler;
  color: string;
}

const StartStopButton = ({ startStop, startStopHandler, color }: IProps) => {
  return (
    <StyledStartStopButtonWrapper>
      <StyledStartStopButton onClick={startStopHandler} color={color}>
        {startStop}
      </StyledStartStopButton>
    </StyledStartStopButtonWrapper>
  );
};

export default StartStopButton;
