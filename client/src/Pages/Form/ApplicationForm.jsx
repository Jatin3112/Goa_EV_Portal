import React,{useState,useEffect} from "react";
import { Paper, ThemeProvider, Grid, Typography ,useMediaQuery} from "@mui/material";
import mainTheme from "../../assets/theme/mainTheme";
import Navbar from "../HomePage/navbar/Navbar";
import FormBanner from "./FormBanner";
import FormFill from "./FormFill";


const ApplicationForm = () => {
    
    const [display, setDisplay] = useState(null)

    const markers = useMediaQuery(mainTheme.breakpoints.down('sm'))
    
    useEffect(() => {
         markers ? setDisplay('none') : setDisplay('flex')
    },[markers])
 

  return (
    <ThemeProvider theme={mainTheme}>
      <Navbar />
      <Grid container sx={{ height: "90.4vh" }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            bgcolor: "primary.main",
            display: {display},
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormBanner />
        </Grid>
        <Grid item xs={12} sm={6}  sx={{
            bgcolor: "white.main",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>

            <FormFill />
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
};

export default ApplicationForm;
