import { MouseEventHandler } from "react";
import styled from "styled-components";

const StyledButtonGroup = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;

  button {
    background-color: inherit;
    color: white;
    cursor: pointer;
    width: 30%;
    height: 70%;
    border: none;

    :hover {
      border: 1px solid #fff;
      border-radius: 7.5px;
    }
  }
`;

interface IProps {
  setColorScheme: MouseEventHandler;
}

const ButtonGroup = ({ setColorScheme }: IProps) => {
  const colorSchemeHandler = (colorScheme) => {
    setColorScheme(colorScheme);
  };

  return (
    <StyledButtonGroup>
      <button
        onClick={() =>
          colorSchemeHandler([
            "pomodoro",
            "rgb(47, 128, 109)",
            "rgb(55, 149, 127)",
          ])
        }
      >
        Pomodoro
      </button>
      <button
        onClick={() =>
          colorSchemeHandler([
            "shortBreak",
            "rgb(14, 85, 94)",
            "rgb(19, 112, 124)",
          ])
        }
      >
        Short Break
      </button>
      <button
        onClick={() =>
          colorSchemeHandler([
            "longBreak",
            "rgb(22, 71, 121)",
            "rgb(25, 82, 138)",
          ])
        }
      >
        Long Break
      </button>
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
