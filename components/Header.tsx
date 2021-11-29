import styled from "styled-components";

import Title from "components/headerComponents/Title";
import ButtonGroup from "components/headerComponents/ButtonGroup";

const StyledSection = styled.section`
  width: 60vw;
  height: 10vh;
  margin: 0 auto 0 auto;
  color: #fff;
  display: flex;
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
