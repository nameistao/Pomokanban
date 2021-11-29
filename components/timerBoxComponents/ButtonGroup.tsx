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
    background-color: inherit;
    color: white;
    cursor: pointer;
    width: 30%;
    height: 70%;
    border: none;

    :hover {
      border: 1px solid #fff;
      border-radius: 7.5px;
    }
  }
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

const ButtonGroup = ({
  setColorScheme,
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
      <button
        onClick={() =>
          changeTimerHandler("pomodoro", [
            "rgb(47, 128, 109)",
            "rgb(55, 149, 127)",
          ])
        }
      >
        Pomodoro
      </button>
      <button
        onClick={() =>
          changeTimerHandler("shortBreak", [
            "rgb(14, 85, 94)",
            "rgb(19, 112, 124)",
          ])
        }
      >
        Short Break
      </button>
      <button
        onClick={() =>
          changeTimerHandler("longBreak", [
            "rgb(22, 71, 121)",
            "rgb(25, 82, 138)",
          ])
        }
      >
        Long Break
      </button>
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
