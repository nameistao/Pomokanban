//packages
import styled from "styled-components";
//components
import ButtonGroup from "components/timerBoxComponents/ButtonGroup";

const StyledTimerOptions = styled.section`
  width: 100%;
  height: 15%;
  z-index: 2;
`;

const TimerOptions = () => {
  return (
    <StyledTimerOptions>
      <ButtonGroup />
    </StyledTimerOptions>
  );
};

export default TimerOptions;
