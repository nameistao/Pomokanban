import styled from "styled-components";

const StyledStartStopButtonWrapper = styled.section`
  width: 100%;
  height: 30%;
  background: purple;
  text-align: center;
  display: flex;
  align-items: center;
`;

const StyledStartStopButton = styled.button`
  width: 40%;
  height: 20%;
  margin: auto;
  border-radius: 7.5px;
  background-color: inherit;
  border: 1px #fff solid;
`;

const StartStopButton = () => {
  return (
    <StyledStartStopButton>
      <button>start</button>
    </StyledStartStopButton>
  );
};

export default StartStopButton;
