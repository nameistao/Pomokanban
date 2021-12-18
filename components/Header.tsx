//packages
import styled from "styled-components";
import { useContext } from "react";
//components
import Title from "components/Title";
import ButtonGroup from "components/ButtonGroup";
import Context from "./Context";

const StyledSection = styled.section<{ innerHeight: number }>`
  width: 70vw;
  height: calc(${(props) => String(props.innerHeight) + "px"} * 0.025);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: calc(${(props) => String(props.innerHeight) + "px"} * 0.02);
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
  const { innerHeight } = useContext(Context);

  return (
    <StyledSection innerHeight={innerHeight}>
      <Title />
      <ButtonGroup />
    </StyledSection>
  );
};

export default Header;
