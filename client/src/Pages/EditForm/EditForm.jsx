import React from "react";
import { ThemeProvider,Grid } from "@mui/material";
import mainTheme from "../../assets/theme/mainTheme";
import Navbar from "../HomePage/navbar/Navbar";
import FormBanner from "../Form/FormBanner";
import Edit from "./Edit";

export default function EditForm() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        <Grid container sx={{ height: "90vh" }}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              bgcolor: "primary.main",
              display:"flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormBanner />
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{
              bgcolor: "white.main",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding:"2.5rem"
            }}
          >
            <Edit />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
