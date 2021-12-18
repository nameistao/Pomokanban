//packages
import { FC, useContext } from "react";
import styled from "styled-components";
//components
import Context from "./Context";

const StyledLoadingBar = styled.section<{ innerHeight: number }>`
  width: 100vw;
  height: calc(${(props) => String(props.innerHeight) + "px"} * 0.025);
  margin-bottom: calc(${(props) => String(props.innerHeight) + "px"} * 0.02);

  @media (max-width: 1024px) {
    height: 2.5%;
  }
`;

const StyledProgressBar = styled.section<{
  barWidth: string;
  innerHeight: number;
}>`
  position: fixed;
  background: #fff;
  width: ${(props) => props.barWidth};
  height: calc(${(props) => String(props.innerHeight) + "px"} * 0.025);
  transition: width 0.5s ease;

  @media (max-width: 1024px) {
    height: 2.5%;
  }
`;

interface IProps {
  progress: number;
}

const ProgressBar: FC<IProps> = ({ progress }) => {
  const { innerHeight } = useContext(Context);

  return (
    <StyledLoadingBar innerHeight={innerHeight}>
      <StyledProgressBar
        barWidth={progress + "vw"}
        innerHeight={innerHeight}
      ></StyledProgressBar>
    </StyledLoadingBar>
  );
};

export default ProgressBar;
