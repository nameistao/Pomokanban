import { MouseEventHandler } from "react";
import styled from "styled-components";

const StyledStartStopButtonWrapper = styled.section`
  width: 100%;
  height: 35%;
  text-align: center;
  display: flex;
  align-items: center;
`;

const StyledStartStopButton = styled.button`
  width: 60%;
  height: 60%;
  margin: auto;
  border-radius: 7.5px;
  background-color: inherit;
  border: 1px #fff solid;
  color: grey;
  background-color: #fff;
  box-shadow: rgb(235, 235, 235) 0px 8px 0px;
  font-size: 30px;
  :hover {
    background-color: #fff;
    cursor: pointer;
  }
  :active {
    transform: translateY(8px);
    box-shadow: none;
    outline: none;
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
