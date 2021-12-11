import styled from "styled-components";
import Times from "components/icons/Times";
import { useState } from "react";

const StyledSettingsModal = styled.section`
  width: 50vw;
  height: 87.5vh;
  background-color: ${(props) => props.color};
  margin: auto;
  border-radius: 6px;
  display: flex;
  align-items: end;
  flex-direction: column;
`;

const StyledTopRow = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4%;
`;

const StyledModalTitle = styled.div`
  width: auto;
  height: 100%;
  font-size: 30px;
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

const StyledRow = styled.div`
  width: 100%;
  height: 10%;
  justify-content: space-between;
  display: flex;
`;

const StyledTextBox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  height: 60%;
  margin: auto 0;
  border-radius: 7.5px;
  border: none;
`;

const StyledSaveButton = styled.button`
  border-radius: 7.5px;
  background-color: inherit;
  border: 1px #fff solid;
  background-color: #fff;
  box-shadow: rgb(235, 235, 235) 0px 8px 0px;
  font-size: 30px;
  font-weight: 600;
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
  margin-top: 10%;
`;

const HorizontalLine = styled.hr`
  width: 90%;
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
        break;
      case "shortBreak":
        setTotal(shortBreakTime * 60);
        setRemainder(shortBreakTime * 60 - elapsed);
        break;
      case "longBreak":
        setTotal(longBreakTime * 60);
        setRemainder(longBreakTime * 60 - elapsed);
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
      <HorizontalLine />
      <StyledModalContent>
        <StyledRow>
          <StyledTextBox>Pomodororo</StyledTextBox>
          <StyledInput
            required
            min="0"
            type="number"
            value={pomodororoTime}
            onChange={pomodororoTimeChangeHandler}
          />
        </StyledRow>
        <StyledRow>
          <StyledTextBox>Short Break</StyledTextBox>
          <StyledInput
            required
            min="0"
            type="number"
            value={shortBreakTime}
            onChange={shortBreakTimeChangeHandler}
          />
        </StyledRow>
        <StyledRow>
          <StyledTextBox>Long Break</StyledTextBox>
          <StyledInput
            required
            min="0"
            type="number"
            value={longBreakTime}
            onChange={longBreakTimeChangeHandler}
          />
        </StyledRow>
        <StyledSaveButton onClick={saveHandler}>Save</StyledSaveButton>
      </StyledModalContent>
    </StyledSettingsModal>
  );
};

export default SettingsModal;
