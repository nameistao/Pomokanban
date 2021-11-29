import styled from "styled-components";
import Info from "components/icons/Info";
import Settings from "components/icons/Settings";
import User from "components/icons/User";

const StyledButtonGroup = styled.div`
  height: 65%;
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
      <StyledInfoButton>
        <Info height={"75%"} />
      </StyledInfoButton>
      <StyledSettingsButton>
        <Settings height={"75%"} />
      </StyledSettingsButton>
      <StyledAccountButton>
        <User height={"75%"} />
      </StyledAccountButton>
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
