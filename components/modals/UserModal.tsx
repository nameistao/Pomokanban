import styled from "styled-components";
import Times from "components/icons/Times";

const StyledUserModal = styled.section`
  width: 60vw;
  height: 82.5vh;
  background-color: ${(props) => props.color};
  margin: auto;
  border-radius: 20px;
  display: flex;
  align-items: end;
  flex-direction: column;
`;

const StyledTopRow = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5%;
`;

const StyledModalTitle = styled.div`
  width: auto;
  height: 100%;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  justify-content: center;
  color: #fff;
`;

const StyledTimesButton = styled.button`
  height: 100%;
  width: auto;
  padding-right: 5%;
  border-radius: 7.5px;
  background-color: inherit;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

const StyledModalContent = styled.div`
  width: 90%;
  margin: 5%;
  height: 85%;
  border-radius: 7.5px;
  color: #fff;
`;

interface IProps {
  color: object;
  setShowModal: Function;
}

const UserModal = ({ color, setShowModal }: IProps) => {
  return (
    <StyledUserModal color={color[1]}>
      <StyledTopRow>
        <StyledModalTitle>User</StyledModalTitle>
        <StyledTimesButton onClick={() => setShowModal("")}>
          <Times height={"100%"} color={"#fff"} />
        </StyledTimesButton>
      </StyledTopRow>
      <StyledModalContent>
        <p>Coming Soon</p>
      </StyledModalContent>
    </StyledUserModal>
  );
};

export default UserModal;