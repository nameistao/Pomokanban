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

const ButtonGroup = () => {
  return (
    <StyledButtonGroup>
      <button>Pomodoro</button>
      <button>Short Break</button>
      <button>Long Break</button>
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
