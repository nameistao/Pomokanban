//packages
import { useContext } from "react";
import styled from "styled-components";
//components
import Context from "components/Context";
import Repeat from "components/icons/Repeat";
import StepForward from "components/icons/StepForward";
import Themes from "styles/Theme";

const StyledStartStopButtonWrapper = styled.section`
  width: 100%;
  height: 35%;
  text-align: center;
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  height: 60%;
`;

const RestartButton = styled.button`
  height: fit-content;
  width: 50px;
  background-color: inherit;
  border: none;
  margin: 16px auto auto auto;
  :hover {
    cursor: pointer;
    opacity: 60%;
  }
  :active {
    opacity: 100%;
  }
`;

const StepForwardButton = styled.button`
  height: fit-content;
  width: 50px;
  background-color: inherit;
  border: none;
  margin: 12px auto auto auto;
  :hover {
    cursor: pointer;
    opacity: 60%;
  }
  :active {
    opacity: 100%;
  }
`;

const StyledStartStopButton = styled.button<{
  color: string;
  startStop: string;
}>`
  width: 60%;
  height: 60%;
  border-radius: 4px;
  background-color: inherit;
  border: 1px #fff solid;
  color: ${(props) => props.color};
  background-color: #fff;
  box-shadow: rgb(235, 235, 235) 0px 8px 0px;
  font-size: 30px;
  font-weight: 900;
  :hover {
    background-color: #fff;
    cursor: pointer;
  }
  :active {
    transform: translateY(8px);
    box-shadow: none;
    outline: none;
  }
  transition: color 0.7s ease;
  transform: ${(props) => props.startStop === "STOP" && "translateY(8px)"};
  box-shadow: ${(props) => props.startStop === "STOP" && "none"};
  outline: ${(props) => props.startStop === "STOP" && "none"};
`;

const StartStopButton = () => {
  const {
    startStop,
    startStopHandler,
    theme,
    setElapsed,
    setTheme,
    curTimer,
    setCurTimer,
  } = useContext(Context);

  const restartHandler = () => {
    if (startStop === "STOP") {
      startStopHandler();
    }
    setElapsed(0);
  };

  const changeTimerHandler = () => {
    let timer;
    switch (curTimer) {
      case "pomodoro":
        timer = "shortBreak";
        break;
      case "shortBreak":
        timer = "longBreak";
        break;
      case "longBreak":
        timer = "pomodoro";
    }

    setTheme(Themes[timer]);
    setElapsed(0);
    setCurTimer(timer);
    if (startStop === "STOP") {
      startStopHandler();
    }
  };

  return (
    <StyledStartStopButtonWrapper>
      <ButtonWrapper>
        <RestartButton onClick={restartHandler}>
          <Repeat color={"#fff"} />
        </RestartButton>
      </ButtonWrapper>
      <StyledStartStopButton
        onClick={startStopHandler}
        color={theme.light}
        startStop={startStop}
      >
        {startStop}
      </StyledStartStopButton>
      <ButtonWrapper>
        <StepForwardButton onClick={changeTimerHandler}>
          <StepForward color={"#fff"} />
        </StepForwardButton>
      </ButtonWrapper>
    </StyledStartStopButtonWrapper>
  );
};

export default StartStopButton;
