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
  let hideMe = true;

  function minusCount() {
    setCount(count - 1);
  }

  function createComponents() {
    var compArray = [];
    for (var i = 1; i <= count; i++) {
      compArray.push(<CountData minusCount={minusCount} hideMe={hideMe} count={i} key={i} />)
    }
    return compArray;
  }

  return (
    <>
      <GameTitle />
      <Divider />
      <>
        <CountData count={0} key={0} />
        {/* {Array(count).fill(<CountData minusCount={minusCount} hideMe count={count} />)} */}
        {createComponents()}
      </>
      <Button variant="outlined" onClick={() => setCount(count + 1)}>
        add new count
      </Button>
    </>
  );
}

