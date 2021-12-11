import styled from "styled-components";

import Title from "components/headerComponents/Title";
import ButtonGroup from "components/headerComponents/ButtonGroup";

const StyledSection = styled.section`
  width: 50vw;
  height: 7.5vh;
  margin: 0 auto 0 auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

interface IProps {
  setShowModal: Function;
  colorScheme: Array<string>;
}

const Header = ({ setShowModal, colorScheme }: IProps) => {
  return (
    <StyledSection>
      <Title />
      <ButtonGroup setShowModal={setShowModal} colorScheme={colorScheme} />
    </StyledSection>
  );
};

export default Header;
