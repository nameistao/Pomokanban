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
  background: ${(props) => props.color};
`;

const Home: NextPage = () => {
  //hooks
  const [progress, setProgress] = useState(0);
  const [startStop, setStartStop] = useState("START");
  //remaining time in seconds
  const [remainder, setRemainder] = useState(25 * 60);
  //total time in seconds, only changed by settings and buttons
  const [total, setTotal] = useState(25 * 60);
  //for tracking intervalId
  const [intervalId, setIntervalId] = useState(0);
  //color scheme
  const [colorScheme, setColorScheme] = useState([
    "pomodoro",
    "rgb(47, 128, 109)",
    "rgb(55, 149, 127)",
  ]);

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
        //console.log("seconds", Math.floor((diff / 1000) % 60));
        //console.log("minutes", Math.floor(diff / 1000 / 60));

        //update remainder with seconds remaining
        setRemainder(diff / 1000);
        //move progress bar
        setProgress((1 - diff / 1000 / total) * 100);

        //if timer is up, end interval
        if (diff < 0) {
          clearInterval(interval);
        }
      }, 500);

      setIntervalId(interval);
    } else {
      //change button text to START
      setStartStop("START");
      //stop progress bar & timer
      clearInterval(intervalId);
    }
  };

  return (
    <>
      <Head>
        <title>
          {Math.floor(remainder / 60) +
            ":" +
            (Math.floor(remainder % 60) < 10
              ? "0" + Math.floor(remainder % 60)
              : Math.floor(remainder % 60)) +
            " - Pomodororo"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledMain color={colorScheme[1]}>
        <LoadingBar
          color="#fff"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Header />
        <TimerBox
          colorScheme={colorScheme}
          setColorScheme={setColorScheme}
          startStop={startStop}
          startStopHandler={startStopHandler}
          remainder={remainder}
        />
        <Tasks />
      </StyledMain>
    </>
  );
};

export default Home;
