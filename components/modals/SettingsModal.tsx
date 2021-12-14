//packages
import styled from "styled-components";
import { useState, useContext, useRef } from "react";
//components
import Times from "components/icons/Times";
import Context from "components/Context";

const StyledSettingsModal = styled.section`
  width: 50vw;
  height: 89vh;
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
  margin: 2% 5% 5% 5%;
  height: 75%;
  border-radius: 7.5px;
  color: #fff;
  font-size: 18px;
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
  width: 15%;
  text-align: center;
  margin: auto 0;
  border-radius: 4px;
  border: 2px #fff solid;
  padding-left: 10px;
  background-color: inherit;
  color: #fff;
  font-size: 18px;
  outline: none;
`;

const StyledSaveButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSaveButton = styled.button`
  border-radius: 4px;
  background-color: inherit;
  border: none;
  font-size: 32.5px;
  font-weight: 600;
  color: #fff;
  :hover {
    cursor: pointer;
  }
  margin-bottom: 4%;
`;

const HorizontalLine = styled.hr`
  width: 90%;
`;

const SettingsModal = () => {
  const { theme, setShowModal, timers, setTimers } = useContext(Context);

  const [pomodoroInput, setPomodoroInput] = useState(timers.pomodoro / 60);
  const [shortBreakInput, setShortBreakInput] = useState(
    timers.shortBreak / 60
  );
  const [longBreakInput, setLongBreakInput] = useState(timers.longBreak / 60);

  const pomodoroRef = useRef(null);
  const shortBreakRef = useRef(null);
  const longBreakRef = useRef(null);

  const saveHandler = () => {
    setTimers({
      pomodoro: pomodoroRef.current.value * 60,
      shortBreak: shortBreakRef.current.value * 60,
      longBreak: longBreakRef.current.value * 60,
    });
    setShowModal("");
  };

  const pomodoroChangeHandler = (e) => {
    setPomodoroInput(e.target.value);
  };

  const shortBreakChangeHandler = (e) => {
    setShortBreakInput(e.target.value);
  };

  const longBreakChangeHandler = (e) => {
    setLongBreakInput(e.target.value);
  };

  return (
    <StyledSettingsModal color={theme.light}>
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
            ref={pomodoroRef}
            value={pomodoroInput}
            onChange={pomodoroChangeHandler}
          />
        </StyledRow>
        <StyledRow>
          <StyledTextBox>Short Break</StyledTextBox>
          <StyledInput
            required
            min="0"
            type="number"
            ref={shortBreakRef}
            value={shortBreakInput}
          />
        </StyledRow>
        <StyledRow>
          <StyledTextBox>Long Break</StyledTextBox>
          <StyledInput
            required
            min="0"
            type="number"
            ref={longBreakRef}
            value={longBreakInput}
          />
        </StyledRow>
      </StyledModalContent>
      <HorizontalLine />
      <StyledSaveButtonWrapper>
        <StyledSaveButton onClick={saveHandler}>&#10004;</StyledSaveButton>
      </StyledSaveButtonWrapper>
    </StyledSettingsModal>
  );
};

export default SettingsModal;
