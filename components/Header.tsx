import styled from "styled-components";

import Title from "components/Title";
import ButtonGroup from "components/ButtonGroup";

const StyledSection = styled.section`
  width: 50vw;
  height: 2.5vh;
  margin: 0 auto 2vh auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledSection>
      <Title />
      <ButtonGroup />
    </StyledSection>
  );
};

export default Header;
