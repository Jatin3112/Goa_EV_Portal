import React, { useState, useEffect } from "react";
import {
  Paper,
  ThemeProvider,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import heroImg from "../../../assets/images/HomePage/heroImage.svg";

const Hero = () => {
  const [direction, setDirection] = useState("row");
  const [margin, setMargin] = useState(20);
  const [headingText, setHeadingText] = useState("h1");

  const match = useMediaQuery(mainTheme.breakpoints.down("md"));

  useEffect(() => {
   
    {
      match ? setMargin(5) : setMargin(20);
    }
    {
      match ? setHeadingText("h2") : setHeadingText("h1");
    }
  }, [match]);

  return (
    <ThemeProvider theme={mainTheme}>
      <Paper sx={{ height: "auto", backgroundColor: "primary.main" ,paddingTop:"1"}}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant = {headingText} sx={{color:"white.main"}}>Goa EV Portal</Typography>
            <Typography my={4} variant = "subtitle1" sx={{color:"white.main"}}>By Government Of Goa</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={heroImg} width="80%"/>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default Hero;
