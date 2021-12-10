import styled from "styled-components";
import ButtonGroup from "components/timerBoxComponents/ButtonGroup";
import { MouseEventHandler } from "react";

const StyledTimerOptions = styled.section`
  width: 100%;
  height: 15%;
  z-index: 2;
`;

interface IProps {
  setColorScheme: Function;
  colorScheme: Array<string>;
  setRemainder: Function;
  timers: Array<number>;
  curTimer: string;
  setCurTimer: Function;
  intervalId: number;
  setTotal: Function;
  setStartStop: Function;
}

const TimerOptions = ({
  setRemainder,
  setColorScheme,
  colorScheme,
  timers,
  curTimer,
  setCurTimer,
  intervalId,
  setTotal,
  setStartStop,
}: IProps) => {
  return (
    <StyledTimerOptions>
      <ButtonGroup
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
    </StyledTimerOptions>
  );
};

export default TimerOptions;
