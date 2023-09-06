import { ThemeProvider } from "@mui/material";
import React from "react";
import mainTheme from "../../../assets/theme/mainTheme";
import Navbar from "../navbar/Navbar";
import Footer from "../Sections/Footer";
import TrackApplicationSection from "./TrackApplicationSection";

const TrackApplication = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Navbar />
      <TrackApplicationSection />
      <Footer />
    </ThemeProvider>
  );
};

export default TrackApplication;
