import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Header from "components/Header";
import TimerBox from "components/TimerBox";
import Tasks from "components/Tasks";
import styled from "styled-components";

const StyledMain = styled.main`
  height: 100vh;
  width: 100vw;
  background: #2f806d;
`;

const Home: NextPage = () => {
  const [progress, setProgress] = useState(75);

  return (
    <StyledMain>
      <LoadingBar
        color="#fff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header />
      <TimerBox />
      <Tasks />
    </StyledMain>
  );
};

export default Home;
