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
