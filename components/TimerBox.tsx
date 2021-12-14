//packages
import React, { MouseEventHandler, useContext } from "react";
import styled from "styled-components";
//components
import TimerOptions from "components/timerBoxComponents/TimerOptions";
import Timer from "components/timerBoxComponents/Timer";
import StartStopButton from "./timerBoxComponents/StartStopButton";
import Context from "./Context";

const StyledSection = styled.section`
  height: 32.5vh;
  width: 50vw;
  padding: 0 4vw 0 4vw;
  color: #fff;
  margin: 0 auto 2vh auto;
  background-color: ${(props) => props.color};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  transition: background-color 0.7s ease;
`;

const TimerBox = () => {
  const { theme } = useContext(Context);

  return (
    <StyledSection color={theme.light}>
      <TimerOptions />
      <Timer />
      <StartStopButton />
    </StyledSection>
  );
};

export default TimerBox;
