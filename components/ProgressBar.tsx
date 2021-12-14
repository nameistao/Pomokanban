//packages
import { FC } from "react";
import styled from "styled-components";

const StyledLoadingBar = styled.section`
  width: 100vw;
  height: 2.5vh;
  margin-bottom: 2vh;
`;

const StyledProgressBar = styled.section<{ barWidth: string }>`
  position: fixed;
  background: #fff;
  width: ${(props) => props.barWidth};
  height: 2.5vh;
  transition: width 0.5s ease;
`;

interface IProps {
  progress: number;
}

const ProgressBar: FC<IProps> = ({ progress }) => {
  return (
    <StyledLoadingBar>
      <StyledProgressBar barWidth={progress + "vw"}></StyledProgressBar>
    </StyledLoadingBar>
  );
};

export default ProgressBar;
