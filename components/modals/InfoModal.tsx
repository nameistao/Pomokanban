import styled from "styled-components";
import Times from "components/icons/Times";

const StyledInfoModal = styled.section`
  width: 60vw;
  height: 82.5vh;
  background-color: ${(props) => props.color};
  margin: auto;
  border-radius: 7.5px;
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
  background-color: #fff;
  border-radius: 7.5px;
`;

interface IProps {
  color: string;
  setShowModal: Function;
}

const InfoModal = ({ color, setShowModal }: IProps) => {
  return (
    <StyledInfoModal color={color}>
      <StyledTopRow>
        <StyledModalTitle>Information</StyledModalTitle>
        <StyledTimesButton onClick={() => setShowModal("")}>
          <Times height={"100%"} color={"#fff"} />
        </StyledTimesButton>
      </StyledTopRow>
      <StyledModalContent>
        <p>- Pomodororo is a productivity tool for managing your work.</p>
        <p>
          - Break down your tasks into manageable chunks of work and breaks.
        </p>
        <p>- Features:</p>
        <p>- Customizable Countdown Timers</p>
        <p>- Progress Bar</p>
      </StyledModalContent>
    </StyledInfoModal>
  );
};

export default InfoModal;
