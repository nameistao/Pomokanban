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
  //hooks
  const [progress, setProgress] = useState(0);
  const [startStop, setStartStop] = useState("START");
  //remaining time in seconds
  const [remainder, setRemainder] = useState(25 * 60);
  //total time in seconds
  const [total, setTotal] = useState(25 * 60);
  //updated only when the start button is used
  const [endTime, setEndTime] = useState(0);
  //for tracking intervalId
  const [intervalId, setIntervalId] = useState(0);

  const startStopHandler = () => {
    if (startStop === "START") {
      //change button text to STOP
      setStartStop("STOP");

      //get end time given remaining time and now time
      const end = new Date(new Date().getTime() + (remainder / 60) * 60000);

      const interval = window.setInterval(() => {
        //get and update remaining time
        let diff = end.getTime() - new Date().getTime();
        //console.log(diff / 1000);
        console.log("seconds", Math.floor((diff / 1000) % 60));
        console.log("minutes", Math.floor(diff / 1000 / 60));

        //update remainder with seconds remaining
        setRemainder(diff / 1000);

        //move progress bar

        //if timer is up, end interval
        if (diff < 0) {
          clearInterval(interval);
        }
      }, 1000);

      setIntervalId(interval);
    } else {
      //change button text to START
      setStartStop("START");
      //stop progress bar & timer
      clearInterval(intervalId);
    }
  };

  return (
    <StyledMain>
      <LoadingBar
        color="#fff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header />
      <TimerBox
        startStop={startStop}
        startStopHandler={startStopHandler}
        remainder={remainder}
      />
      <Tasks />
    </StyledMain>
  );
};

export default Home;
