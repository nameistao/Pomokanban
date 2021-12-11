import { Dispatch, MouseEventHandler } from "react";
import styled from "styled-components";

const StyledButtonGroup = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;

  button {
    color: white;
    cursor: pointer;
    width: 30%;
    height: 75%;
    border: none;
    transition: background-color 0.7s ease;
    border-radius: 4px;
    font-size: 15px;
  }
`;

const PomodoroButton = styled.button<{ color: string; curTimer: string }>`
  background-color: ${(props) =>
    props.curTimer === "pomodoro" ? props.color : "inherit"};
`;

const ShortBreakButton = styled.button<{ color: string; curTimer: string }>`
  background-color: ${(props) =>
    props.curTimer === "shortBreak" ? props.color : "inherit"};
`;

const LongBreakButton = styled.button<{ color: string; curTimer: string }>`
  background-color: ${(props) =>
    props.curTimer === "longBreak" ? props.color : "inherit"};
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

const ButtonGroup = ({
  setColorScheme,
  colorScheme,
  setRemainder,
  timers,
  curTimer,
  setCurTimer,
  intervalId,
  setTotal,
  setStartStop,
}: IProps) => {
  const changeTimerHandler = (timer, colorScheme) => {
    setColorScheme(colorScheme);
    setCurTimer(timer);
    clearInterval(intervalId);
    setStartStop("START");
    switch (timer) {
      case "pomodoro":
        setRemainder(timers[0]);
        setTotal(timers[0]);
        break;
      case "shortBreak":
        setRemainder(timers[1]);
        setTotal(timers[1]);
        break;
      case "longBreak":
        setRemainder(timers[2]);
        setTotal(timers[2]);
        break;
    }
  };

  return (
    <StyledButtonGroup>
      <PomodoroButton
        onClick={() =>
          changeTimerHandler("pomodoro", [
            "rgb(47, 128, 109)",
            "rgb(55, 149, 127)",
          ])
        }
        curTimer={curTimer}
        color={colorScheme[0]}
      >
        Pomodoro
      </PomodoroButton>
      <ShortBreakButton
        onClick={() =>
          changeTimerHandler("shortBreak", [
            "rgb(14, 85, 94)",
            "rgb(19, 112, 124)",
          ])
        }
        curTimer={curTimer}
        color={colorScheme[0]}
      >
        Short Break
      </ShortBreakButton>
      <LongBreakButton
        onClick={() =>
          changeTimerHandler("longBreak", [
            "rgb(22, 71, 121)",
            "rgb(25, 82, 138)",
          ])
        }
        curTimer={curTimer}
        color={colorScheme[0]}
      >
        Long Break
      </LongBreakButton>
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
