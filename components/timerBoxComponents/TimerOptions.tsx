import styled from "styled-components";
import ButtonGroup from "components/timerBoxComponents/ButtonGroup";

const StyledTimerOptions = styled.section`
  width: 100%;
  height: 20%;
`;

const TimerOptions = () => {
  return (
    <StyledTimerOptions>
      <ButtonGroup />
    </StyledTimerOptions>
  );
};

export default TimerOptions;
