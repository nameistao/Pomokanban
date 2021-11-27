import styled from "styled-components";

const StyledButtonGroup = styled.div`
  height: 30%;
  width: 30%;
  display: flex;
  align-items: center;
  margin: auto;

  button {
    border: 1px solid #fff;
    background-color: inherit;
    color: white;
    cursor: pointer;
    width: 33.333%;
    height: 100%;

    :hover {
      background: #fff;
      color: black;
    }
  }
`;

const StyledInfoButton = styled.button`
  border-top-left-radius: 7.5px;
  border-bottom-left-radius: 7.5px;
`;

const StyledSettingsButton = styled.button``;

const StyledAccountButton = styled.button`
  border-top-right-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
`;

const ButtonGroup = () => {
  return (
    <StyledButtonGroup>
      <StyledInfoButton>Info</StyledInfoButton>
      <StyledSettingsButton>Settings</StyledSettingsButton>
      <StyledAccountButton>Account</StyledAccountButton>
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
