import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Typography } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
    input: {
        height: theme.typography.h4.fontSize,
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight,
        textAlign: "center",
        align: "center",
        '& input': {
            textAlign: "center"
        }
    },
    base: {
        padding: 10,

    }
}));

export default function GameTitle() {
    const classes = useStyles();
    return (
        <div className={classes.base}>
            <InputBase
                className={classes.input}
                required
                fullWidth='true'
                defaultValue="Game Name"
                inputProps={{ 'aria-label': 'naked' }}
            />
        </div>
    );
}