import styled from "styled-components";

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
`;

const Timer = () => {
  return (
    <StyledTimerWrapper>
      <StyledTimer>25:00</StyledTimer>
    </StyledTimerWrapper>
  );
};

export default Timer;
