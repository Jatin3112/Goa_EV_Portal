import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#685BC7",
      dark: "#3F2E9F",
      light: "#8F7EEB",
    },
    
    black: {
      main: "#000000",
    },
    white: {
      main: "#FFFFFF",
    },
    grey: {
      main: grey[500],
    },
    success: {
      main: "#27d027",
    },
  },
  typography: {
    fontFamily: "Inter , sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontSize: "5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
      textAlign: "center",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 700,
      textAlign: "center",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1.1rem",
      fontWeight: 600,
      margin: "0px 10px",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "5px",
          padding: "8px 20px",
          fontSize: "1rem",
          textAlign: "center",
          margin: "10px 5px",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      },
      defaultProps: {
        variant: "contained",
        color: "primary",
        focusRipple: false,
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            border: "1px solid white",
            color: "white",
            "&:hover": {
              transform: "scale(1.05)",
              border: "1px solid white",
            },
          },
        },
      ],
    },

    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          color: "black",
          "&:hover": {
            cursor: "pointer",
          },
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "250px",
          textAlign: "center",
        },
      },
    },

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        borderRadius: "0px",
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          padding: "0px 20px",
          justifyContent: "space-around",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          padding: "0px 20px",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {},
      },
      defaultProps: {},
    },
    
  },
});

export default mainTheme;
