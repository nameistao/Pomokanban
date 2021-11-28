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
  const [startStop, setStartStop] = useState("stop");
  const [remainder, setRemainder] = useState(25 * 60);
  const [endTime, setEndTime] = useState(0);

  const startStopHandler = () => {
    const end = new Date(new Date().getTime() + 1 * 60000);
    alert(new Date(new Date().getTime() + 25 * 60000).toLocaleTimeString());
    console.log(end.getTime());
    const interval = setInterval(() => {
      let diff = end.getTime() - new Date().getTime();
      console.log(diff);

      if (diff < 0) {
        clearInterval(interval);
      }
    }, 1000);
    // if (startStop === "stop") {
    //   setEndTime(new Date().getTime());

    //   setStartStop("start");
    // } else {
    //   setStartStop("stop");
    // }
  };

  return (
    <StyledMain>
      <LoadingBar
        color="#fff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header />
      <TimerBox startStopHandler={startStopHandler} />
      <Tasks />
    </StyledMain>
  );
};

export default Home;
