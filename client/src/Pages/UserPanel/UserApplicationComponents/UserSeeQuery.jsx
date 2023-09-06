import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import axios from "axios";
import baseURL from "../../../assets/config";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserSeeQuery() {
  const [width, setWidth] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

  const number = localStorage.getItem("number");

  const fetchData = async () => {
    const response = await axios.get(
      `${baseURL}/userQuery/${number}`
    );

    setData(response.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        See Query
      </Button>

      {data.map((row) => (
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
              {row.query}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      ))}
    </ThemeProvider>
  );
}
