import React,{useEffect, useState} from "react";
import { Paper, ThemeProvider, Typography, Button, } from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";

const Section1 = () => {

 

 
  return (
    <ThemeProvider theme={mainTheme}>
      <Paper sx={{ height: "auto", backgroundColor: "white.main" }}>
        <Typography
          variant="h6"
          mt={8}
          sx={{ color: "grey.main", textAlign: "center" }}
        >
          GOA STATE SUBSIDY ON ELECTRIC VEHICLE
        </Typography>
        <Typography
          variant="h2"
          mt={8}
          sx={{ color: "black.main", textAlign: "center" }}
        >
          Who Are Eligible
        </Typography>
        <Typography
          variant="h6"
          mt={8}
          sx={{ color: "black.main", textAlign: "center" }}
        >
          The Subsidy scheme of Government of Goa on the electric vehicle is
          applicable to <br />
          the residents of Goa state. The following persons will be eligle for
          the subsidy on <br /> the 2-wheeler and 4-wheeler Electric Vehicle:
        </Typography>
        <Typography mt={8} sx={{ color: "black.main", textAlign: "center" }}>
          <Button href="/form">Apply Now</Button>
        </Typography>
      </Paper>
    </ThemeProvider>
  );
};

export default Section1;
