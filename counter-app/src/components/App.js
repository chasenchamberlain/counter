import { React, useState, Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import GameTitle from "./GameTitle";
import CountData from "./CountData";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const { ipcRenderer } = window.require("electron");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  base: {
    padding: 20,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const [componentCount, setComponentCount] = useState(0);
  const [count, setCount] = useState(0);
  const [countTile, setCountTitle] = useState("");
  const [gameTitle, setGameTitle] = useState("");
  let hideMe = true;

  useEffect(() => {
    sendData();
  }, [count, countTile, gameTitle])

  function sendData() {
    ipcRenderer.send('form-submission', countTile, count, gameTitle);
  }

  function minusCount() {
    setComponentCount(componentCount - 1);
  }

  function createComponents() {
    var compArray = [];
    for (var i = 1; i <= componentCount; i++) {
      compArray.push(<CountData minusCount={minusCount} sendCount={setCount} sendCountTitle={setCountTitle} hideMe={hideMe} compCount={i} key={i} />)
    }
    return compArray;
  }

  return (
    <>
      <GameTitle sendGameTitle={setGameTitle} />
      <Divider />
      <>
        <CountData sendCount={setCount} sendCountTitle={setCountTitle} count={0} key={0} />
        {/* {Array(count).fill(<CountData minusCount={minusCount} hideMe count={count} />)} */}
        {createComponents()}
      </>
      <Button variant="outlined" onClick={() => setComponentCount(componentCount + 1)}>
        add new count
      </Button>
    </>
  );
}

