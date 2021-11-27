import { useState } from "react";
import styled from "styled-components";

const StyledTitle = styled.header`
  color: #fff;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  font-size: 40px;
  padding-left: 10%;
  text-align: center;
`;

const Title = () => {
  const [hoverHeader, setHoverHeader] = useState(false);

  const hoverHandler = () => {
    setHoverHeader(true);
  };

  const unhoverHandler = () => {
    setHoverHeader(false);
  };

  return (
    <StyledTitle onMouseEnter={hoverHandler} onMouseLeave={unhoverHandler}>
      {hoverHeader ? "GitHub" : "Pomodororo"}
    </StyledTitle>
  );
};

export default Title;
