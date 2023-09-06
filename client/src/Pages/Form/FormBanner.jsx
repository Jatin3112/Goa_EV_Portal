import React,{useState,useEffect} from 'react'
import { Paper, ThemeProvider, Grid, Typography ,useMediaQuery} from "@mui/material";
import mainTheme from "../../assets/theme/mainTheme";
import carImg from "../../assets/images/Form/formImage.svg";

const FormBanner = () => {

    const [display, setDisplay] = useState(null)

   const markers = useMediaQuery(mainTheme.breakpoints.down('sm'))
   
   useEffect(() => {
        markers ? setDisplay('none') : setDisplay('flex')
   },[markers])
   
  return (
    <ThemeProvider theme={mainTheme}>

      
          <Typography variant="h4" sx={{ color: "white.main" }}>
            Let's Go Electric <br /> (Apply Online For Subsidy)
          </Typography>
          <img src={carImg} alt="car" width="auto" />
      

    </ThemeProvider>
  )
}

export default FormBanner