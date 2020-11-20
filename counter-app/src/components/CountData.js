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


// const ipcRenderer = require('electron').ipcRenderer;

const useStyles = makeStyles((theme) => ({
    input: {
        height: theme.typography.h6.fontSize,
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
        textAlign: "left",
        align: "left",
        "& input": {
            textAlign: "left",
        },
    },
    root: {
        padding: 15,
    },
    countInput: {
        height: theme.typography.h4.fontSize,
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight,
        textAlign: "left",
        align: "left",
        "& input": {
            textAlign: "left",
        },
    }
}));

export default function CountData(props) {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const [countTitleString, setCountTitleString] = useState("Count Title");
    // console.log({ props });
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
                    id={"countTitle" + props.count}
                    fullWidth="true"
                    value={countTitleString}
                    onChange={(event) => setCountTitleString(event.target.value)}
                    inputProps={{ "aria-label": "naked" }}
                />
                <InputBase
                    className={classes.countInput}
                    id={"countNum" + props.count}
                    value={count}
                    inputProps={{ "aria-label": "naked" }} />
                <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical outlined primary button group"
                >
                    <Button onClick={() => setCount(count + 1)}>+</Button>
                    <Button onClick={() => setCount(count - 1)}>-</Button>
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
