//packages
import styled from "styled-components";
import { useContext } from "react";
//components
import Context from "components/Context";

const StyledTimerWrapper = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  text-align: center;
`;

const StyledTimer = styled.div`
  width: 100%;
  font-size: 10rem;
  margin-top: 12px;
`;

const Timer = () => {
  const { elapsed, timers, curTimer } = useContext(Context);
  return (
    <StyledTimerWrapper>
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
