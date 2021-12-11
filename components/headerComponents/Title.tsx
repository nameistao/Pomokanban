import { useState } from "react";
import styled from "styled-components";

const StyledTitle = styled.header`
  color: #fff;
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  letter-spacing: -0.8px;

  a {
    color: #fff;
    text-decoration: none;

    :hover {
      text-decoration: none;
      cursor: pointer;
    }
  }
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
      {/* {hoverHeader ? (
        <a
          href="https://github.com/nameistao/Pomodororo_V2"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      ) : (
        "Pomodororo"
      )} */}
      <a href="https://pomokanban.com" rel="noopener noreferrer">
        Pomokanban
      </a>
    </StyledTitle>
  );
};

export default Title;
