import styled from "styled-components";
import Info from "components/icons/Info";
import Settings from "components/icons/Settings";
import User from "components/icons/User";

const StyledButtonGroup = styled.div<{ color: string }>`
  height: 100%;
  width: 25%;
  display: flex;
  margin: auto 0 auto 0;
  justify-content: flex-end;

  button {
    border: none;
    background-color: ${(props) => props.color};
    color: white;
    cursor: pointer;
    width: 33.333%;
    height: 100%;
    transition: background-color 0.7s ease;
    margin-left: 10px;

    :hover {
      background: #fff;
      color: ${(props) => props.color};
    }
  }
`;

const StyledInfoButton = styled.button`
  border-radius: 4px;
`;

const StyledSettingsButton = styled.button`
  border-radius: 4px;
`;

const StyledAccountButton = styled.button`
  border-radius: 4px;
`;

interface IProps {
  setShowModal: Function;
  colorScheme: Array<string>;
}

const ButtonGroup = ({ setShowModal, colorScheme }: IProps) => {
  const buttonHandler = (modalType) => {
    setShowModal(modalType);
  };

  return (
    <StyledButtonGroup color={colorScheme[1]}>
      <StyledInfoButton
        onClick={() => buttonHandler("info")}
        aria-label="Information"
      >
        <Info height={"100%"} />
      </StyledInfoButton>
      <StyledSettingsButton
        onClick={() => buttonHandler("settings")}
        aria-label="Settings"
      >
        <Settings height={"100%"} />
      </StyledSettingsButton>
      {/* <StyledAccountButton
        onClick={() => buttonHandler("user")}
        aria-label="User"
      >
        <User height={"75%"} />
      </StyledAccountButton> */}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
