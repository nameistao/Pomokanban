import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import TimerOptions from "components/timerBoxComponents/TimerOptions";
import Timer from "components/timerBoxComponents/Timer";
import StartStopButton from "./timerBoxComponents/StartStopButton";

const StyledSection = styled.section`
  height: 35vh;
  width: 60vw;
  color: #fff;
  margin: 0 auto 0 auto;
  background: #37957f;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

interface IProps {
  startStopHandler: MouseEventHandler;
}

const TimerBox = ({ startStopHandler }: IProps) => {
  return (
    <StyledSection>
      <TimerOptions />
      <Timer />
      <StartStopButton />
    </StyledSection>
  );
};

export default TimerBox;
