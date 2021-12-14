//packages
import { useContext } from "react";
//components
import styled from "styled-components";
import Context from "components/Context";
import Themes from "styles/Theme";

const StyledTimerOptions = styled.section`
  width: 100%;
  height: 15%;
  z-index: 2;
`;

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

const ButtonGroup = () => {
  const {
    theme,
    setTheme,
    curTimer,
    setCurTimer,
    intervalId,
    setStartStop,
    setElapsed,
  } = useContext(Context);

  const changeTimerHandler = (timer) => {
    setTheme(Themes[timer]);
    setElapsed(0);
    setCurTimer(timer);
    clearInterval(intervalId);
    setStartStop("START");
  };

  return (
    <StyledTimerOptions>
      <StyledButtonGroup>
        <PomodoroButton
          onClick={() => changeTimerHandler("pomodoro")}
          curTimer={curTimer}
          color={theme.dark}
        >
          Pomodoro
        </PomodoroButton>
        <ShortBreakButton
          onClick={() => changeTimerHandler("shortBreak")}
          curTimer={curTimer}
          color={theme.dark}
        >
          Short Break
        </ShortBreakButton>
        <LongBreakButton
          onClick={() => changeTimerHandler("longBreak")}
          curTimer={curTimer}
          color={theme.dark}
        >
          Long Break
        </LongBreakButton>
      </StyledButtonGroup>
    </StyledTimerOptions>
  );
};

export default ButtonGroup;
