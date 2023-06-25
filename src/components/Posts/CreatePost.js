import React, { useState } from "react";
import styled from "styled-components/macro";
import { Modal, Button as MuiButton } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import CreatePostForm from "./CreatePostForm";

const Button = styled(MuiButton)(spacing);

function getModalStyle() {
  const top = 40;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
    padding: theme.spacing(2, 4, 3),
  },
}));

function CreatePost() {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        size="large"
        mb={10}
        onClick={handleOpen}
      >
        New Post
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>Create Post</h2>

          <CreatePostForm closeModal={handleClose} />
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default CreatePost;
