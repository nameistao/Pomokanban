import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  height: 35vh;
  width: 60vw;
  color: #fff;
  margin: 0 auto 0 auto;
  background: #37957f;
  border-radius: 20px;
`;

interface IProps {
  startStopHandler: MouseEventHandler;
}

const TimerBox = ({ startStopHandler }: IProps) => {
  return (
    <StyledSection>
      <button onClick={startStopHandler}>start</button>
    </StyledSection>
  );
};

export default TimerBox;
