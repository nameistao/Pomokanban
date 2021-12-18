//packages
import React, { MouseEventHandler, useContext } from "react";
import styled from "styled-components";
//components
import ButtonGroup from "components/timerBoxComponents/ButtonGroup";
import Timer from "components/timerBoxComponents/Timer";
import StartStopButton from "./timerBoxComponents/StartStopButton";
import Context from "./Context";
import Repeat from "components/icons/Repeat";

const StyledSection = styled.section<{ innerHeight: number }>`
  height: calc(${(props) => String(props.innerHeight) + "px"} * 0.325);
  width: 60vw;
  padding: 0 4vw 0 4vw;
  color: #fff;
  margin-left: auto; 
  margin-right auto;
  margin-bottom: calc(${(props) => String(props.innerHeight) + "px"} * 0.02);
  background-color: ${(props) => props.color};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  transition: background-color 0.7s ease;
  @media (max-width: 1024px) {
    width: 90vw;
  }
  @media (max-width: 480px) {
    width: 95vw;
  }
`;

const TimerBox = () => {
  const { theme, innerHeight } = useContext(Context);

  return (
    <StyledSection color={theme.light} innerHeight={innerHeight}>
      <ButtonGroup />
      <Timer />
      <StartStopButton />
    </StyledSection>
  );
};

export default TimerBox;
