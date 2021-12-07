import styled from "styled-components";
import Times from "components/icons/Times";
import { useState } from "react";

const StyledSettingsModal = styled.section`
  width: 60vw;
  height: 82.5vh;
  background-color: ${(props) => props.color};
  margin: auto;
  border-radius: 20px;
  display: flex;
  align-items: end;
  flex-direction: column;
`;

const StyledTopRow = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5%;
`;

const StyledModalTitle = styled.div`
  width: auto;
  height: 100%;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  justify-content: center;
  color: #fff;
`;

const StyledTimesButton = styled.button`
  height: 100%;
  width: auto;
  padding-right: 5%;
  border-radius: 7.5px;
  background-color: inherit;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

const StyledModalContent = styled.div`
  width: 90%;
  margin: 5%;
  height: 85%;
  border-radius: 7.5px;
  color: #fff;
`;

interface IProps {
  color: object;
  setShowModal: Function;
  timers: Array<number>;
  setTimers: Function;
  remainder: number;
  setRemainder: Function;
  total: number;
  setTotal: Function;
  curTimer: string;
  startStopHandler: Function;
}

const SettingsModal = ({
  color,
  setShowModal,
  timers,
  setTimers,
  remainder,
  setRemainder,
  total,
  setTotal,
  curTimer,
  startStopHandler,
}: IProps) => {
  const [pomodororoTime, setPomodororoTime] = useState(timers[0] / 60);
  const [shortBreakTime, setShortBreakTime] = useState(timers[1] / 60);
  const [longBreakTime, setLongBreakTime] = useState(timers[2] / 60);

  const pomodororoTimeChangeHandler = (e) => {
    setPomodororoTime(e.target.value);
  };

  const shortBreakTimeChangeHandler = (e) => {
    setShortBreakTime(e.target.value);
  };

  const longBreakTimeChangeHandler = (e) => {
    setLongBreakTime(e.target.value);
  };

  const saveHandler = () => {
    setTimers([pomodororoTime * 60, shortBreakTime * 60, longBreakTime * 60]);
    const elapsed = Math.floor(total - remainder);
    switch (curTimer) {
      case "pomodoro":
        setTotal(pomodororoTime * 60);
        setRemainder(pomodororoTime * 60 - elapsed);
        startStopHandler();
        break;
      case "shortBreak":
        setTotal(shortBreakTime * 60);
        setRemainder(shortBreakTime * 60 - elapsed);
        startStopHandler();
        break;
      case "longBreak":
        setTotal(longBreakTime * 60);
        setRemainder(longBreakTime * 60 - elapsed);
        startStopHandler();
        break;
    }
  };
  return (
    <StyledSettingsModal color={color[1]}>
      <StyledTopRow>
        <StyledModalTitle>Settings</StyledModalTitle>
        <StyledTimesButton onClick={() => setShowModal("")}>
          <Times height={"100%"} color={"#fff"} />
        </StyledTimesButton>
      </StyledTopRow>
      <StyledModalContent>
        <p>
          Pomodororo
          <input
            type="text"
            value={pomodororoTime}
            onChange={pomodororoTimeChangeHandler}
          />
        </p>
        <p>
          Short Break
          <input
            type="text"
            value={shortBreakTime}
            onChange={shortBreakTimeChangeHandler}
          />
        </p>
        <p>
          Long Break
          <input
            type="text"
            value={longBreakTime}
            onChange={longBreakTimeChangeHandler}
          />
        </p>
        <button onClick={saveHandler}>Save</button>
      </StyledModalContent>
    </StyledSettingsModal>
  );
};

export default SettingsModal;
