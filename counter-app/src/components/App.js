import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import 'fontsource-roboto';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core";
import GameTitle from "./GameTitle";
import CountData from "./CountData";
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <Container>
      <GameTitle />
      <CountData />
    </Container>
  );
}