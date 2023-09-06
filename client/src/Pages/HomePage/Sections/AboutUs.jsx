import React, { useEffect, useState } from "react";
import {
  Paper,
  ThemeProvider,
  Typography,
  Grid,
} from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import aboutUs from "../../../assets/images/HomePage/aboutUsImg.svg";

const boxStyle = {
  height: "236px",
  width: "256px",
  display: "flex",
  justifyContent: "center",
};

const AboutUs = () => {
    
    
  return (
    <ThemeProvider theme={mainTheme}>
      <Paper sx={{ height: "auto", backgroundColor: "white.main" }}>
        <Typography
          variant="h2"
          mt={8}
          sx={{ color: "black.main", textAlign: "center" }}
        >
          About Us
        </Typography>
        <Typography
          variant="h6"
          mt={4}
          sx={{ color: "black.main", textAlign: "center" }}
        >
          Goa Energy Development Agency
        </Typography>

        <Grid container spacing={2} mt={8} >
          <Grid sx={boxStyle} item xs={12} sm={6} md={3}>
            <img  src={aboutUs} />
          </Grid>
          <Grid  sx={boxStyle} item xs={12} sm={6} md={3}>
            <img  src={aboutUs} />
          </Grid>
          <Grid sx={boxStyle} item xs={12} sm={6} md={3}>
            <img  src={aboutUs} />
          </Grid>
          <Grid sx={boxStyle} item xs={12} sm={6} md={3}>
            <img  src={aboutUs} />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default AboutUs;
