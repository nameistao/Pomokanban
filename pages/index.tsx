import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import LoadingBar from "components/LoadingBar";
import Header from "components/Header";
import TimerBox from "components/TimerBox";
import Tasks from "components/Tasks";
import InfoModal from "components/modals/InfoModal";
import SettingsModal from "components/modals/SettingsModal";
import UserModal from "components/modals/UserModal";
import styled from "styled-components";
import "@atlaskit/css-reset";

const StyledMain = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.color};
  transition: background-color 0.7s ease;
`;

const Home: NextPage = () => {
  //start or stop state
  const [startStop, setStartStop] = useState("START");
  //current timer
  const [curTimer, setCurTimer] = useState("pomodoro");
  //timers, in seconds. setTimers is used by settings
  const [timers, setTimers] = useState([25 * 60, 5 * 60, 15 * 60]);
  //remaining time in seconds
  const [remainder, setRemainder] = useState(timers[0]);
  //total time in seconds, only changed by settings and buttons
  const [total, setTotal] = useState(timers[0]);
  //progress bar
  const [progress, setProgress] = useState(0);
  //for tracking intervalId
  const [intervalId, setIntervalId] = useState(0);
  //color scheme
  const [colorScheme, setColorScheme] = useState([
    "rgb(47, 128, 109)",
    "rgb(55, 149, 127)",
  ]);
  //show modals
  const [showModal, setShowModal] = useState("");
  const [taskData, setTaskData] = useState({
    tasks: {},
    columns: {
      "column-1": {
        id: "column-1",
        title: "To Do",
        taskIds: [],
      },
      "column-2": {
        id: "column-2",
        title: "In Progress",
        taskIds: [],
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        taskIds: [],
      },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
  });

  //updating progress bar
  useEffect(() => {
    setProgress((1 - remainder / total) * 100);
  }, [remainder, total]);

  const startStopHandler = () => {
    if (startStop === "START") {
      //change button text to STOP
      setStartStop("STOP");

      //get end time given remaining time and now time
      const end = new Date(new Date().getTime() + (remainder / 60) * 60000);

      const interval = window.setInterval(() => {
        //get and update remaining time
        let diff = end.getTime() - new Date().getTime();

        //update remainder with seconds remaining
        setRemainder(diff / 1000);

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
          {(remainder < 0
            ? "0:00"
            : Math.floor(remainder / 60) +
              ":" +
              (Math.floor(remainder % 60) < 10
                ? "0" + Math.floor(remainder % 60)
                : Math.floor(remainder % 60))) + " - Pomodororo"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledMain color={colorScheme[0]}>
        <LoadingBar progress={progress} />
        <Header setShowModal={setShowModal} />
        {showModal === "info" && (
          <InfoModal color={colorScheme} setShowModal={setShowModal} />
        )}
        {showModal === "settings" && (
          <SettingsModal
            color={colorScheme}
            setShowModal={setShowModal}
            timers={timers}
            setTimers={setTimers}
            remainder={remainder}
            setRemainder={setRemainder}
            total={total}
            setTotal={setTotal}
            curTimer={curTimer}
            startStopHandler={startStopHandler}
          />
        )}
        {showModal === "user" && (
          <UserModal color={colorScheme} setShowModal={setShowModal} />
        )}
        {showModal === "" && (
          <>
            <TimerBox
              colorScheme={colorScheme}
              setColorScheme={setColorScheme}
              startStop={startStop}
              startStopHandler={startStopHandler}
              remainder={remainder}
              setRemainder={setRemainder}
              timers={timers}
              curTimer={curTimer}
              setCurTimer={setCurTimer}
              intervalId={intervalId}
              setTotal={setTotal}
              setStartStop={setStartStop}
            />
            <Tasks taskData={taskData} setTaskData={setTaskData} />
          </>
        )}
      </StyledMain>
    </>
  );
};

export default Home;
