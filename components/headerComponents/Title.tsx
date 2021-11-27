import styled from "styled-components";

const StyledTitle = styled.header`
  color: #fff;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  font-size: 40px;
`;

const Title = () => {
  return <StyledTitle>Pomodororo</StyledTitle>;
};

export default Title;
