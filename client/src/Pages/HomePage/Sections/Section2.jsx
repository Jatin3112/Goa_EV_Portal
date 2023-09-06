import React, { useState, useEffect } from "react";
import {
  Paper,
  ThemeProvider,
  Typography,
  Grid,
  Box,
  useMediaQuery,
  Button,
} from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import bestQuality from "../../../assets/images/HomePage/bestQualityImg.svg";

const Hero = () => {
  
  const [headingText, setHeadingText] = useState("h1");
  const [btnWidth, setBtnWidth] = useState(null);
  const [alignItems, setAlignItems] = useState(null);

  const match = useMediaQuery(mainTheme.breakpoints.down("md"));
  const match1 = useMediaQuery(mainTheme.breakpoints.down("sm"));

 
  

  useEffect(() => {
    
    {
      match ? setHeadingText("h3") : setHeadingText("h2");
    }
    {
      match1 ? setBtnWidth("100%") : setBtnWidth("50%");
    }
    {
      match1 ? setAlignItems("center") : setAlignItems("flex-start");
    }
    
  }, [match,match1]);

  return (
    <ThemeProvider theme={mainTheme}>
      <Paper
     
        sx={{
          height: "auto",
          backgroundColor: "primary.main",
          paddingTop: "1",
          marginTop: "2rem",
        }}
      >
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
              textAlign: "center",
            }}
          >
            <img src={bestQuality} width="80%" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: {alignItems},
              
            }}
          >
            <Typography variant={headingText} sx={{ color: "white.main" }}>
              Best Quality
            </Typography>
            <Typography my={4} variant="subtitle1" sx={{ color: "white.main" }}>
            Company works with homeowners, contractors, realtors, and residential building managers <br /> to help maintain, upgrade, and repair properties.
            
            </Typography>
            <Button href="/form" variant="outlined" sx={{width:`${btnWidth}`}} >Apply Now</Button>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default Hero;
