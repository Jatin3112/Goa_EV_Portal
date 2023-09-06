import React, { useEffect, useState } from "react";
import {
  Paper,
  ThemeProvider,
  Typography,
  Button,
  TextField,
  Stack,
  Box,
} from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import axios from "axios";
import Steps from "../../../assets/Stepper/Steps";
import baseURL from "../../../assets/config";

const TrackApplicationSection = () => {
  const [applicationNumber, setApplicationNumber] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [flag, setFlag] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/trackApplication`,
        {
          applicationNumber: applicationNumber,
        }
      );

      if(response.data.length === 0){

        alert("No User Found !!")

      }else{
        setId(response.data[0].id);
      setFirstName(response.data[0].firstName);
      setLastName(response.data[0].lastName);
      setStatus(response.data[0].status);

      }

      
    } catch (err) {
      console.log(err);
    }
  };

  const handleTrack = (e) => {
    e.preventDefault();
    fetchData();
    setFlag(true);
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Paper sx={{ height: "auto", backgroundColor: "white.main" }}>
        <Typography
          variant="h2"
          mt={8}
          sx={{ color: "black.main", textAlign: "center" }}
        >
          Track Application
        </Typography>

        <Stack
          spacing={15}
          mt={8}
          direction="row"
          sx={{ justifyContent: "center" }}
        >
          <TextField
            label="Application Number"
            onChange={(e) => setApplicationNumber(e.target.value)}
            sx={{ width: "30%" }}
          />
        </Stack>

        <Box mt={10} sx={{ textAlign: "center" }}>
          {flag && (
            <Typography
              variant="h4"
              m={8}
              sx={{ color: "primary.main", textAlign: "center" }}
            >
            {`Name : ${firstName} ${lastName}`}
            </Typography>
          )}

          {flag && <Steps id={id} status={status} />}
        </Box>

        <Typography mt={8} sx={{ color: "black.main", textAlign: "center" }}>
          <Button onClick={handleTrack}>Track Application</Button>
        </Typography>
      </Paper>
    </ThemeProvider>
  );
};

export default TrackApplicationSection;
