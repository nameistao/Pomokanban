import React, { Dispatch, MouseEventHandler } from "react";
import styled from "styled-components";
import TimerOptions from "components/timerBoxComponents/TimerOptions";
import Timer from "components/timerBoxComponents/Timer";
import StartStopButton from "./timerBoxComponents/StartStopButton";

const StyledSection = styled.section`
  height: 35vh;
  width: fit-content;
  padding: 0 4vw 0 4vw;
  color: #fff;
  margin: 0 auto 0 auto;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  transition: background-color 0.7s ease;
`;

interface IProps {
  colorScheme: Array<string>;
  setColorScheme: Function;
  startStop: string;
  startStopHandler: MouseEventHandler;
  remainder: number;
  setRemainder: Function;
  timers: Array<number>;
  curTimer: string;
  setCurTimer;
  intervalId: number;
  setTotal: Function;
  setStartStop: Function;
}

const TimerBox = ({
  colorScheme,
  setColorScheme,
  startStop,
  startStopHandler,
  remainder,
  setRemainder,
  timers,
  curTimer,
  setCurTimer,
  intervalId,
  setTotal,
  setStartStop,
}: IProps) => {
  return (
    <StyledSection color={colorScheme[1]}>
      <TimerOptions
        setColorScheme={setColorScheme}
        colorScheme={colorScheme}
        setRemainder={setRemainder}
        timers={timers}
        curTimer={curTimer}
        setCurTimer={setCurTimer}
        intervalId={intervalId}
        setTotal={setTotal}
        setStartStop={setStartStop}
      />
      <Timer remainder={remainder} />
      <StartStopButton
        startStop={startStop}
        startStopHandler={startStopHandler}
        color={colorScheme[1]}
      />
    </StyledSection>
  );
};

export default TimerBox;
