import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import mainTheme from "../../assets/theme/mainTheme";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function UserNavbar({ heading }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
            {heading}
          </Typography>
          <Typography variant="h6" noWrap component="div">
            <Button
              variant="outlined"
              href="/"
              sx={{ color: "white.main" }}
              onClick={() => window.localStorage.clear()}
            >
              Log Out{" "}
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
