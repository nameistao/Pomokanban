import { MouseEventHandler } from "react";
import styled from "styled-components";

const StyledStartStopButtonWrapper = styled.section`
  width: 100%;
  height: 30%;
  text-align: center;
  display: flex;
  align-items: center;
`;

const StyledStartStopButton = styled.button`
  width: 80%;
  height: 75%;
  margin: auto;
  border-radius: 7.5px;
  background-color: inherit;
  border: 1px #fff solid;
  color: #fff;
  :hover {
    background-color: #fff;
    cursor: pointer;
    color: black;
  }
`;

interface IProps {
  startStop: string;
  startStopHandler: MouseEventHandler;
}

const StartStopButton = ({ startStop, startStopHandler }: IProps) => {
  return (
    <StyledStartStopButtonWrapper>
      <StyledStartStopButton onClick={startStopHandler}>
        {startStop}
      </StyledStartStopButton>
    </StyledStartStopButtonWrapper>
  );
};

export default StartStopButton;
