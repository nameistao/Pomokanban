import styled from "styled-components";

import Title from "components/Title";
import ButtonGroup from "components/ButtonGroup";

const StyledSection = styled.section`
  width: 60vw;
  height: 2.5vh;
  margin: 0 auto 2vh auto;
  color: #fff;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 90vw;
  }

  @media (max-width: 480px) {
    width: 95vw;
  }
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
