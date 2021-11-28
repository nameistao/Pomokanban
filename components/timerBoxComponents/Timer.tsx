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

interface IProps {
  remainder: number;
}

const Timer = ({ remainder }: IProps) => {
  return (
    <StyledTimerWrapper>
      <StyledTimer>
        {Math.floor(remainder / 60)}:
        {Math.floor(remainder % 60) === 0 ? "00" : Math.floor(remainder % 60)}
      </StyledTimer>
    </StyledTimerWrapper>
  );
};

export default Timer;
