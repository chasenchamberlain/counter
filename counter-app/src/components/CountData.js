import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


// const { ipcRenderer } = window.require("electron");

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
        padding: 2,
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
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [countTitle, setCountTitle] = useState("Count Title");
    const [countDialog, setCountDialog] = useState(0);
    const [countTitleDialog, setCountTitleDialog] = useState("")

    useEffect(() => {
        props.sendCount(count);
        props.sendCountTitle(countTitle);
    }, [count, countTitle])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (cancelOrSubmit) => {
        if (cancelOrSubmit) {
            setCount(countDialog);
            setCountTitle(countTitleDialog);
        }
        setOpen(false);
    };

    const getCountFromDialog = (countFromDialog) => {
        (countFromDialog === "") ? setCountDialog(0) : setCountDialog(parseInt(countFromDialog));
    }

    const getCountTitleFromDialog = (countTitleFromDialog) => {
        (countTitleFromDialog === "") ? setCountTitleDialog("Count Title") : setCountTitleDialog(countTitleFromDialog);
    }

    return (
        <Paper className={classes.root}>
            <Grid
                container
                className={classes.root}
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
            >
                <IconButton onClick={handleClickOpen}>
                    <EditOutlinedIcon />
                </IconButton>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit count title/count </DialogTitle>
                    <DialogContent>
                        <TextField
                            name="countTitleDialog"
                            autoFocus
                            onChange={(event) => getCountTitleFromDialog(event.target.value)}
                            margin="dense"
                            id="countTitleDialog"
                            label="Count Title"
                            placeholder={countTitle}
                            fullWidth
                        />
                        <TextField
                            name="countDialog"
                            onChange={(event) => getCountFromDialog(event.target.value)}
                            margin="dense"
                            id="countDialog"
                            label="Count"
                            placeholder={count.toString()}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose(false)} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={() => handleClose(true)} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>

                <Typography id={"countTitle" + props.compCount}>
                    {countTitle}
                </Typography>
                <Typography id={"countNum" + props.compCount}>
                    {count}
                </Typography>

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


// Deprecated land
/*
<InputBase
    required
    className={classes.input}
    id={"countTitle" + props.count}
    fullWidth="true"
    value={countTitleString}
    onChange={(event) => updateCountString(event.target.value)}
    inputProps={{ "aria-label": "naked" }}
    />
*/

/*
<InputBase
    className={classes.countInput}
    id={"countNum" + props.count}
    value={count}
    onChange={(event) => updateCount(event.target.value)}
    inputProps={{ "aria-label": "naked" }}
/>
*/
