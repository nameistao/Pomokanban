import styled from "styled-components";
import ButtonGroup from "components/timerBoxComponents/ButtonGroup";
import { MouseEventHandler } from "react";

const StyledTimerOptions = styled.section`
  width: 100%;
  height: 20%;
`;

interface IProps {
  setColorScheme: MouseEventHandler;
}

const TimerOptions = ({ setColorScheme }: IProps) => {
  return (
    <StyledTimerOptions>
      <ButtonGroup setColorScheme={setColorScheme} />
    </StyledTimerOptions>
  );
};

export default TimerOptions;
