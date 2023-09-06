import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { ThemeProvider, useMediaQuery } from "@mui/material";

import TextField from "@mui/material/TextField";
import axios from "axios";
import mainTheme from "../../../assets/theme/mainTheme";
import SendIcon from "@mui/icons-material/Send";
import baseURL from "../../../assets/config";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SendQuery({ id }) {
  const [width, setWidth] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [queryToSent, setQueryToSent] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");

  React.useEffect(() => {
    // Fetch userEmail and name from the server
    axios
      .get(`${baseURL}/applications/user/${id}`)
      .then((response) => {
        setUserEmail(response.data[0].email);
        setfirstName(response.data[0].firstName);
        setlastName(response.data[0].lastName);
      })
      .catch((error) => {
        console.error("An error occurred while fetching user data:", error);
      });
  }, [id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendQuery = async () => {
    try {
      // Update query in the database
      await axios.put(`${baseURL}/applications/query/${id}`, {
        query: queryToSent,
      });
      console.log("Query updated successfully.");

      // Send query to the user via email
      const response = await axios.post(
        `${baseURL}/applications/sendQuery`,
        {
          userEmail: userEmail,
          firstName: firstName,
          lastName: lastName,
          data: queryToSent,
          // Include the data in the request body
        }
      );

      console.log(response.data.msg); // Success message from the server
      setQueryToSent("");
      handleClose(); // Close the dialog after sending the query if desired
    } catch (error) {
      console.error("An error occurred while updating data:", error);
    }
  };

  const markers = useMediaQuery(mainTheme.breakpoints.down("sm"));

  React.useEffect(() => {
    markers ? setWidth("100%") : setWidth("auto");
  }, [markers]);

  return (
    <ThemeProvider theme={mainTheme}>
      <Button
        size="small"
        aria-controls={open ? "split-button-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-label="select merge strategy"
        aria-haspopup="menu"
        onClick={handleClickOpen}
        sx={{ width: width }}
      >
        <SendIcon /> &nbsp; Send Query
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Your Query"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ marginBottom: "2%", width: "550px" }}
            id="alert-dialog-slide-description"
          >
            Enter Your query below
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your query"
            type="text"
            fullWidth
            value={queryToSent}
            onChange={(e) => setQueryToSent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSendQuery}>Send</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
