import styled from "styled-components";
import Times from "components/icons/Times";

const StyledUserModal = styled.section`
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

const UserModal = ({ color, setShowModal }: IProps) => {
  return (
    <StyledUserModal color={color}>
      <StyledTimesButton onClick={() => setShowModal("")}>
        <Times height={"100%"} color={"#fff"} />
      </StyledTimesButton>
    </StyledUserModal>
  );
};

export default UserModal;
