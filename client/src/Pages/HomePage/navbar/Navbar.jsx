import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Link,
  Button,
  useMediaQuery,
  Modal,
} from "@mui/material";

import gedaLogo from "../../../assets/images/HomePage/gedaLogo.svg";

import SideBar from "./Sidebar";
import mainTheme from "../../../assets/theme/mainTheme";
import SignIn from "../../../assets/Popups/SignIn"

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const matches = useMediaQuery(mainTheme.breakpoints.down("lg"));

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <AppBar position="static" color="white" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={gedaLogo} alt="gedaLogo" width={140} />
            </Typography>

            {matches ? (
              <SideBar />
            ) : (
              <Stack direction="row" spacing={10}>
                <Link href="/">Home</Link>
                <Link>About</Link>
                <Link href = "/trackapplication">Track Application</Link>
                <Link>Inportant Documents</Link>
                <Link>Contact Us</Link>
                <Button onClick={handleOpen}>Login </Button>
              </Stack>
            )}
          </Toolbar>
        </AppBar>

        <Modal open={open} onClose={handleClose}>
          <SignIn />
        </Modal>
      </ThemeProvider>
    </>
  );
}
