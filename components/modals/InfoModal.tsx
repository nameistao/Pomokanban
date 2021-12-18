//packages
import styled from "styled-components";
import { useContext } from "react";
//components
import Times from "components/icons/Times";
import Context from "components/Context";

const StyledInfoModal = styled.section`
  width: 50vw;
  height: 89vh;
  background-color: ${(props) => props.color};
  margin: auto;
  border-radius: 6px;
  display: flex;
  align-items: end;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 90vw;
  }
  @media (max-width: 480px) {
    width: 95vw;
  }
`;

const StyledTopRow = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4%;
`;

const StyledModalTitle = styled.div`
  width: auto;
  height: 100%;
  font-size: 30px;
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
  margin: 2% 5% 5% 5%;
  height: 85%;
  border-radius: 7.5px;
  color: #fff;
  font-size: 18px;
`;

const HorizontalLine = styled.hr`
  width: 90%;
`;

const InfoModal = () => {
  const { theme, setShowModal } = useContext(Context);

  return (
    <StyledInfoModal color={theme.light}>
      <StyledTopRow>
        <StyledModalTitle>Information</StyledModalTitle>
        <StyledTimesButton onClick={() => setShowModal("")}>
          <Times height={"100%"} color={"#fff"} />
        </StyledTimesButton>
      </StyledTopRow>
      <HorizontalLine />
      <StyledModalContent>
        <p>
          -{" "}
          <b>
            <u>Features:</u>
          </b>
        </p>
        <p>- Customizable Countdown Timers</p>
        <p>- Progress Bar</p>
        <p>- Kanban Board</p>
        <p>
          -{" "}
          <b>
            <u>Instructions:</u>
          </b>
        </p>
        <p>- Click the timer to edit timer</p>
        <p>- Click &quot;Add To Do&quot; to add a task</p>
        <p>
          -{" "}
          <b>
            <u>Hotkeys:</u>
          </b>
        </p>
        <p>- Spacebar &#8594; Start/Stop</p>
        <p>- R &#8594; Restart Timer</p>
        <p>- S &#8594; Skip Timer</p>
      </StyledModalContent>
    </StyledInfoModal>
  );
};

export default InfoModal;
