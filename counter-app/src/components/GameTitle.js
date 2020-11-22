import { React, useState } from "react";
import { makeStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  input: {
    height: theme.typography.h4.fontSize,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    textAlign: "center",
    align: "center",
    "& input": {
      textAlign: "center",
    },
  },
  base: {
    padding: 10,
  },
}));

export default function GameTitle() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [gameTitle, setGameTitle] = useState("Game Title");
  const [inputGameTitle, setInputValue] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const getGameTile = (gameTitleValue) => {
    if (gameTitleValue !== "") {
      setInputValue(gameTitleValue);
    }
  }

  const handleClose = (cancelOrSubmit) => {
    if (cancelOrSubmit) {
      setGameTitle(inputGameTitle);
    }
    setOpen(false);
  };

  return (
    // <div className={classes.base}>
    //   <InputBase
    //     className={classes.input}
    //     required
    //     fullWidth="true"
    //     defaultValue="Game Name"
    //     inputProps={{ "aria-label": "naked" }}
    //   />
    // </div>
    <div className={classes.base}>
      <Button color="primary" onClick={handleClickOpen} endIcon={<EditIcon />}>
        {gameTitle}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit game name.</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <TextField
            required
            autoFocus
            className={classes.input}
            onChange={(event) => getGameTile(event.target.value)}
            margin="dense"
            id="gameName"
            label="Game Name"
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
    </div>
  );
}
