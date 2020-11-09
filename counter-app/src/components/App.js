import { React, useState, Fragment } from "react";
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
  const [count, setCount] = useState(0);

  function minusCount() {
    setCount(count - 1);
  }

  let hideMeNot = true;
  let hideMe = false;

  return (
    <>
      <GameTitle />
      <Divider />
      <>
        <CountData />
        {Array(count).fill(<CountData minusCount={minusCount} hideMe />)}
      </>
      <Button variant="outlined" onClick={() => setCount(count + 1)}>
        add new count
      </Button>
    </>
  );
}

