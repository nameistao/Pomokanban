import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import TimerOptions from "components/timerBoxComponents/TimerOptions";
import Timer from "components/timerBoxComponents/Timer";
import StartStopButton from "./timerBoxComponents/StartStopButton";
import { start } from "repl";

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
  startStop: string;
  startStopHandler: MouseEventHandler;
}

const TimerBox = ({ startStop, startStopHandler }: IProps) => {
  return (
    <StyledSection>
      <TimerOptions />
      <Timer />
      <StartStopButton
        startStop={startStop}
        startStopHandler={startStopHandler}
      />
    </StyledSection>
  );
};

export default TimerBox;
