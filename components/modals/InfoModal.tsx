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

const InfoModal = ({ color, setShowModal }: IProps) => {
  return (
    <StyledInfoModal color={color}>
      <StyledTimesButton onClick={() => setShowModal("")}>
        <Times height={"100%"} color={"#fff"} />
      </StyledTimesButton>
    </StyledInfoModal>
  );
};

export default InfoModal;
