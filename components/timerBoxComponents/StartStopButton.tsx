//packages
import { useContext } from "react";
import styled from "styled-components";
//components
import Context from "components/Context";
import Repeat from "components/icons/Repeat";

const StyledStartStopButtonWrapper = styled.section`
  width: 100%;
  height: 35%;
  text-align: center;
  display: flex;
  align-items: center;
`;

const RestartButtonWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  height: 60%;
`;

const RestartButton = styled.button`
  height: fit-content;
  width: 50%;
  background-color: inherit;
  border: none;
  margin: 20px auto auto auto;
  :hover {
    cursor: pointer;
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
  const { startStop, startStopHandler, theme, setElapsed } =
    useContext(Context);

  const restartHandler = () => {
    startStopHandler();
    setElapsed(0);
  };

  return (
    <StyledStartStopButtonWrapper>
      <RestartButtonWrapper>
        <RestartButton onClick={restartHandler}>
          <Repeat color={"#fff"} />
        </RestartButton>
      </RestartButtonWrapper>
      <StyledStartStopButton
        onClick={startStopHandler}
        color={theme.light}
        startStop={startStop}
      >
        {startStop}
      </StyledStartStopButton>
    </StyledStartStopButtonWrapper>
  );
};

export default StartStopButton;
