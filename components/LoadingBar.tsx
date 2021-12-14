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
`;

interface IProps {
  progress: number;
}

const LoadingBar = ({ progress }: IProps) => {
  return (
    <StyledLoadingBar>
      <StyledProgressBar barWidth={progress + "vw"}></StyledProgressBar>
    </StyledLoadingBar>
  );
};

export default LoadingBar;
