//packages
import styled from "styled-components";
import { useContext, useState } from "react";
//components
import Context from "components/Context";

const StyledTimerWrapper = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const StyledTimer = styled.div`
  width: 100%;
  font-size: 10rem;
  margin-top: 12px;
`;

const EditModeWrapper = styled.section`
  width: 100%;
  height: 50%;
  font-size: 10rem;
  text-align: center;
  display: flex;
  align-items: center;
`;

const EditModeInput = styled.input`
  width: 100%;
  height: 100%;
  margin-top: 12px;
  background-color: inherit;
  text-align: center;
  border: none;
  border-radius: 4px;
  outline: none;
  color: #fff;
  font-size: 10rem;
  ::placeholder {
    color: #fff;
    opacity: 50%;
    text-align: center;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Timer = () => {
  const {
    elapsed,
    timers,
    curTimer,
    setAllowKeys,
    editMode,
    setEditMode,
    editTimerRef,
  } = useContext(Context);

  return editMode ? (
    <EditModeWrapper>
      <EditModeInput
        type="number"
        min="1"
        placeholder={String(Math.floor(timers[curTimer] / 60))}
        ref={editTimerRef}
        //onBlur={() => alert("here")}
        autoFocus
      ></EditModeInput>
    </EditModeWrapper>
  ) : (
    <StyledTimerWrapper
      onClick={() => {
        setAllowKeys(false);
        setEditMode(true);
      }}
    >
      <StyledTimer>
        {timers[curTimer] - elapsed < 0
          ? "00:00"
          : (Math.floor((timers[curTimer] - elapsed) / 60) < 10
              ? "0" + Math.floor((timers[curTimer] - elapsed) / 60)
              : Math.floor((timers[curTimer] - elapsed) / 60)) +
            ":" +
            (Math.floor((timers[curTimer] - elapsed) % 60) < 10
              ? "0" + Math.floor((timers[curTimer] - elapsed) % 60)
              : Math.floor((timers[curTimer] - elapsed) % 60))}
      </StyledTimer>
    </StyledTimerWrapper>
  );
};

export default Timer;
