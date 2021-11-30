import styled from "styled-components";
import Times from "components/icons/Times";

const StyledSettingsModal = styled.section`
  width: 60vw;
  height: 82.5vh;
  background-color: ${(props) => props.color};
  margin: auto;
  border-radius: 7.5px;
  display: flex;
  align-items: end;
  flex-direction: column;
`;

const StyledTimesButton = styled.button`
  height: 10%;
  width: auto;
  border-radius: 7.5px;
  background-color: inherit;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

interface IProps {
  color: string;
  setShowModal: Function;
}

const SettingsModal = ({ color, setShowModal }: IProps) => {
  return (
    <StyledSettingsModal color={color}>
      <StyledTimesButton onClick={() => setShowModal("")}>
        <Times height={"100%"} color={"#fff"} />
      </StyledTimesButton>
    </StyledSettingsModal>
  );
};

export default SettingsModal;
