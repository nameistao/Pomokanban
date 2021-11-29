import styled from "styled-components";
import ButtonGroup from "components/timerBoxComponents/ButtonGroup";
import { MouseEventHandler } from "react";

const StyledTimerOptions = styled.section`
  width: 100%;
  height: 20%;
`;

interface IProps {
  setColorScheme: Function;
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
