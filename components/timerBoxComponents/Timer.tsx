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
  border-radius: 6px;
  padding-top: 6px;
  :hover {
    cursor: pointer;
    border: #fff 2px solid;
  }
`;

const StyledTimer = styled.div`
  width: 100%;
  font-size: 8rem;
`;

const EditModeWrapper = styled.section`
  width: 100%;
  height: 50%;
  font-size: 8rem;
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
  border-radius: 6px;
  outline: none;
  color: #fff;
  font-size: 8rem;
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
    setTimers,
  } = useContext(Context);

  const onBlurHandler = () => {
    if (editTimerRef.current.value === "") {
      setEditMode(false);
      setAllowKeys(true);
    } else {
      setTimers({
        ...timers,
        [curTimer]: Math.max(editTimerRef.current.value * 60, 60),
      });
      setEditMode(false);
      setAllowKeys(true);
    }
  };

  return editMode ? (
    <EditModeWrapper>
      <EditModeInput
        type="number"
        min="1"
        placeholder={String(Math.floor(timers[curTimer] / 60))}
        ref={editTimerRef}
        onBlur={onBlurHandler}
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
