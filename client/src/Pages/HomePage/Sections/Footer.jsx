import React, { useEffect, useState } from "react";
import {
  Paper,
  ThemeProvider,
  Typography,
  Grid,
  Link,
  useMediaQuery,
} from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import ahaSolarLogo from "../../../assets/images/HomePage/ahaSolarLogo.svg";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import RoomIcon from "@mui/icons-material/Room";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const gridItem = {
  margin: "auto",
};

const Footer = () => {
  function sendEmail() {
    const recipient = "gedagoa@yahoo.com";

    const mailtoUrl = `mailto:${recipient}`;
    window.location.href = mailtoUrl;
  }

  const [height, setHeight] = useState("24.45rem");

  const markers = useMediaQuery(mainTheme.breakpoints.down("md"));
  useEffect(() => {
    markers ? setHeight("50rem") : setHeight("24.45rem");
  }, [markers]);

  return (
    <ThemeProvider theme={mainTheme}>
      <Paper sx={{ height: { height }, backgroundColor: "primary.main" }}>
        <Grid container spacing={2} mt={8}>
          <Grid sx={gridItem} item xs={12} sm={5} md={3}>
            <Typography variant="h5" mt={8} sx={{ color: "white.main" }}>
              Quick Links
            </Typography>
            <Typography variant="subtitle1" mt={4} sx={{ color: "white.main" }}>
              <Link href="/" sx={{ color: "white.main" }}>
                <HomeIcon />
                &nbsp; Home
              </Link>
            </Typography>
            <Typography variant="subtitle1" mt={2} sx={{ color: "white.main" }}>
              <Link href="/" sx={{ color: "white.main" }}>
                <ChecklistRtlIcon />
                &nbsp; Terms And Conditions
              </Link>
            </Typography>
            <Typography variant="subtitle1" mt={2} sx={{ color: "white.main" }}>
              <Link href="/" sx={{ color: "white.main" }}>
                <ArticleIcon />
                &nbsp; Privacy Policy
              </Link>
            </Typography>
          </Grid>
          <Grid sx={gridItem} item xs={12} sm={5} md={3}>
            <Typography variant="h5" mt={8} sx={{ color: "white.main" }}>
              Contact Details
            </Typography>
            <Typography variant="subtitle1" mt={4} sx={{ color: "white.main" }}>
              <Link
                href="https://www.goa.gov.in/department/goa-energy-development-agency-geda/"
                sx={{ color: "white.main" }}
              >
                <CorporateFareIcon />
                &nbsp; Goa Energy Development Agency
              </Link>
            </Typography>
            <Typography variant="subtitle1" mt={2} sx={{ color: "white.main" }}>
              <Link
                href="https://www.google.com/maps/place/Goa+Energy+Development+Agency+(GEDA)/@15.495385,73.8354301,15z/data=!4m2!3m1!1s0x0:0x15846d94e652d5ae?sa=X&ved=2ahUKEwj_-PqK15-AAxVnTmwGHUTxBRAQ_BJ6BAhHEAA&ved=2ahUKEwj_-PqK15-AAxVnTmwGHUTxBRAQ_BJ6BAhaEAM"
                sx={{ color: "white.main" }}
              >
                <RoomIcon />
                &nbsp; 5th Floor, Goa - IDC Building, Patto-Panaji-Goa
              </Link>
            </Typography>
            <Typography variant="subtitle1" mt={2} sx={{ color: "white.main" }}>
              <Link onClick={sendEmail} sx={{ color: "white.main" }}>
                <MailOutlineIcon />
                &nbsp; gedagoa@yahoo.com
              </Link>
            </Typography>
          </Grid>
          <Grid sx={gridItem} item xs={12} sm={12} md={3}>
            <Typography
              variant="h5"
              mt={6}
              sx={{
                color: "white.main",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              Developmed And Maintained By
            </Typography>
            <Typography variant="subtitle1" mt={8} sx={{ color: "white.main" }}>
              <Link
                href="https://www.ahasolar.in/"
                sx={{
                  color: "white.main",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <img src={ahaSolarLogo} width={100} />
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default Footer;
