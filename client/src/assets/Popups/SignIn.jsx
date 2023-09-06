import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  ThemeProvider,
  TextField,
  Button,
  useMediaQuery,
  Tab,
  Stack,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import mainTheme from "../theme/mainTheme";
import axios from "axios";
import baseURL from "../config";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [width, setWidth] = useState(null);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const markers = useMediaQuery(mainTheme.breakpoints.down("sm"));

  useEffect(() => {
    markers ? setWidth("100%") : setWidth("35%");
  }, [markers]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { width },
    bgcolor: "background.paper",
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      email: email,
      password: password,
    };

    axios
      .post(`${baseURL}/adminLogin`, requestBody)
      .then((response) => {
        const data = response.data;

        if (data.error) {
          console.log(data.error);
        } else if (data.token) {
          localStorage.setItem("token", data.token);

          navigate("/admin");
        }
      })
      .catch((error) => {
        alert("Invalid Credentials");
      });
  };
  const handleUserSubmit = (e) => {
    e.preventDefault();

    const body = {
      number: number,
    };
    axios.post(`${baseURL}/userLogin`, body).then((res) => {
      const data = res.data;

      if (data.error) {
        console.log(data.error);
      } else if (data) {
        localStorage.setItem("number", data);

        navigate("/user");
      }
    });


  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Box sx={style}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Admin Login" value="1" sx={{ width: "50%" }} />
              <Tab label="User Login" value="2" sx={{ width: "50%" }} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Typography variant="h2" color="primary" mt={4}>
              Admin Login
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "2rem",
                padding: "4rem",
              }}
            >
              <TextField
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleAdminSubmit}>Sign In</Button>
              <Typography
                variant="h6"
                color="primary"
                sx={{ textAlign: "center" }}
              >
                Forgot Password?
              </Typography>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Typography variant="h2" color="primary" mt={4}>
              User Login
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "2rem",
                padding: "4rem",
              }}
            >
              <TextField
                label="Phone Number"
                onChange={(e) => setNumber(e.target.value)}
              />

              <Button onClick={handleUserSubmit}>Sign In</Button>
              <Typography
                variant="h6"
                color="primary"
                sx={{ textAlign: "center" }}
              >
                Forgot Password?
              </Typography>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
}
