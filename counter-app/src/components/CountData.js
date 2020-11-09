import { React, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  input: {
    height: theme.typography.h6.fontSize,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    textAlign: "center",
    align: "center",
    "& input": {
      textAlign: "center",
    },
  },
  root: {
    padding: 15,
  },
}));

export default function CountData(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="baseline"
        className={classes.root}
      >
        <InputBase
          className={classes.input}
          required
          fullWidth="true"
          defaultValue="Count Title"
          inputProps={{ "aria-label": "naked" }}
        />
        <Typography variant="h4">666</Typography>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>+</Button>
          <Button>-</Button>
        </ButtonGroup>
      </Grid>
      <>
        {props.hideMe
          ? <IconButton aria-label="delete" onClick={props.minusCount}>
            <DeleteIcon />
          </IconButton>
          : <></>
        }
      </>
    </Paper>
  );
}
