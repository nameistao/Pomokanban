//packages
import type { NextPage } from "next";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import styled from "styled-components";
//Components
import Context from "components/Context";
import ProgressBar from "components/ProgressBar";
import Header from "components/Header";
import InfoModal from "components/modals/InfoModal";
import SettingsModal from "components/modals/SettingsModal";
import UserModal from "components/modals/UserModal";
import TimerBox from "components/TimerBox";
import Tasks from "components/Tasks";
import Themes from "styles/Theme";
//Hooks
import useKeyPress from "hooks/useKeyPress";

const StyledMain = styled.main<{ color: string; innerHeight: number }>`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.color};
  transition: background-color 0.7s ease;
  font-family: Arial;

  @media (max-width: 1024px) {
    height: ${(props) =>
      typeof props.innerHeight !== "undefined"
        ? String(props.innerHeight) + "px"
        : "100vh"};
  }
`;

const Home: NextPage = () => {
  //STATES
  const [theme, setTheme] = useState({
    dark: "rgb(47, 128, 109)",
    light: "rgb(55, 149, 127)",
  });

  const [timers, setTimers] = useState({
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  });

  const [curTimer, setCurTimer] = useState("pomodoro");

  const [startStop, setStartStop] = useState("START");

  const [progress, setProgress] = useState(0);

  const [elapsed, setElapsed] = useState(0);

  const [intervalId, setIntervalId] = useState(0);

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

  const [allowKeys, setAllowKeys] = useState(true);

  const [editMode, setEditMode] = useState(false);

  const [innerHeight, setInnerHeight] = useState(null);

  //KEY PRESS EFFECTS
  const pressedR = useKeyPress("r");
  const pressedS = useKeyPress("s");
  const pressedSpace = useKeyPress(" ");
  const pressedEnter = useKeyPress("Enter");

  useEffect(() => {
    if (pressedEnter && editTimerRef.current !== null) {
      if (editTimerRef.current.value === "") {
        setEditMode(false);
        setAllowKeys(true);
      } else {
        setTimers({
          ...timers,
          [curTimer]: Math.max(editTimerRef.current.value * 60, 60),
        });
        setEditMode(false);
        setAllowKeys(true);
      }
    }
  }, [pressedEnter]);

  useEffect(() => {
    if (pressedR && allowKeys) {
      if (startStop === "STOP") {
        startStopHandler();
      }
      setElapsed(0);
    }
  }, [pressedR]);

  useEffect(() => {
    if (pressedS && allowKeys) {
      let timer;
      switch (curTimer) {
        case "pomodoro":
          timer = "shortBreak";
          break;
        case "shortBreak":
          timer = "longBreak";
          break;
        case "longBreak":
          timer = "pomodoro";
      }

      setTheme(Themes[timer]);
      setElapsed(0);
      setCurTimer(timer);
      if (startStop === "STOP") {
        startStopHandler();
      }
    }
  }, [pressedS]);

  useEffect(() => {
    if (pressedSpace && allowKeys) {
      startStopHandler();
    }
  }, [pressedSpace]);

  //EFFECTS
  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    if (showModal !== "") {
      setAllowKeys(false);
    }
  }, [showModal]);

  useEffect(() => {
    setProgress((elapsed / timers[curTimer]) * 100);
    if (elapsed === timers[curTimer]) {
      audio.current.play();
      startStopHandler();
      setElapsed(0);
    }
  }, [elapsed, curTimer]);

  //set taskData and timers in localStorage
  useEffect(() => {
    if (
      localStorage.getItem("taskData") !== null &&
      localStorage.getItem("taskData") !== undefined
    ) {
      setTaskData(JSON.parse(localStorage.getItem("taskData")));
    }
    if (
      localStorage.getItem("timers") !== null &&
      localStorage.getItem("timers") !== undefined
    ) {
      setTimers(JSON.parse(localStorage.getItem("timers")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(taskData));
  }, [taskData]);

  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(timers));
  }, []);

  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(timers));
  }, [timers]);

  //REFS
  const audio = useRef(null);

  const editTimerRef = useRef(null);

  //HANDLERS
  const startStopHandler = () => {
    if (startStop === "START") {
      setStartStop("STOP");

      //get end time given current timer
      const end = new Date(
        new Date().getTime() + ((timers[curTimer] - elapsed) / 60) * 60000
      );

      const interval = window.setInterval(() => {
        //update elapsed time
        setElapsed(
          Math.floor(
            timers[curTimer] - (end.getTime() - new Date().getTime()) / 1000
          )
        );

        //if timer is up, end interval
        if (new Date().getTime() >= end.getTime()) {
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
          {timers[curTimer] - elapsed < 0
            ? "00:00"
            : (Math.floor((timers[curTimer] - elapsed) / 60) < 10
                ? "0" + Math.floor((timers[curTimer] - elapsed) / 60)
                : Math.floor((timers[curTimer] - elapsed) / 60)) +
              ":" +
              (Math.floor((timers[curTimer] - elapsed) % 60) < 10
                ? "0" + Math.floor((timers[curTimer] - elapsed) % 60)
                : Math.floor((timers[curTimer] - elapsed) % 60)) +
              " - Pomokanban"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Pomokanban is a free and customizable productivity app that includes both a pomodoro timer and kanban board!"
        />
      </Head>
      <audio className="audio-element" ref={audio}>
        <source src="/cuckoo-clock.mp3"></source>
      </audio>
      <Context.Provider
        value={{
          elapsed,
          theme,
          setTheme,
          setShowModal,
          startStop,
          setStartStop,
          startStopHandler,
          timers,
          setTimers,
          curTimer,
          setCurTimer,
          intervalId,
          setElapsed,
          taskData,
          setTaskData,
          allowKeys,
          setAllowKeys,
          editMode,
          setEditMode,
          editTimerRef,
        }}
      >
        <StyledMain color={theme.dark} innerHeight={innerHeight}>
          <ProgressBar progress={progress} />
          <Header />
          {showModal === "info" && <InfoModal />}
          {showModal === "settings" && <SettingsModal />}
          {showModal === "user" && <UserModal />}
          {showModal === "" && (
            <>
              <TimerBox />
              <Tasks />
            </>
          )}
        </StyledMain>
      </Context.Provider>
    </>
  );
};

export default Home;
