import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  ThemeProvider,
  Button,
  Stack,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import AdminNavbar from "../AdminBar/AdminNavbar";
import Steps from "../../../assets/Stepper/Steps";
import axios from "axios";
import ViewForm from "./ViewForm";
import DownloadForm from "./DownloadForm";
import SendQuery from "./SendQuery";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TaskIcon from '@mui/icons-material/Task';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import baseURL from "../../../assets/config";

const AdminApplicationList = () => {
  const [width, setWidth] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [role, setRole] = useState("");



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/applications/applicationCard`
      );

      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Make the GET request to the protected API endpoint
    axios
      .get(`${baseURL}/apiProtected`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token in the request header
        },
      })
      .then((response) => {
        const data = response.data;
        // Access the role from the response data
        const role = data.data.user.role;
        setRole(role);
      })
      .catch((error) => {
        console.error("An error occurred", error);
        // Handle any errors
      });
  }, []);

  useEffect(() => {
    const filteredData = data.filter((row) => {
      if (role === "super_admin") {
        if (row.status < 6) {
          return row;
        }
      } else if (role === "accounts") {
        if (row.status > 2 && row.status < 4) {
          return row;
        }
      } else if (role === "technical") {
        if (row.status < 3) {
          return row;
        }
      }
    });

    setFilteredData(filteredData);
  }, [data]);

  const markers = useMediaQuery(mainTheme.breakpoints.down("sm"));

  useEffect(() => {
    if (markers) {
      setWidth("100%");
    } else {
      setWidth("auto");
    }
  }, [markers]);

  const handleUpdateStatus = async (id) => {
    const updatedData = data.map((row) => {
      if (row.id === id) {
        let status = parseInt(row.status, 10); // Convert status to a number
        status = status + 1; // Increment the status value by 1

        // Limit the status value to a maximum of 5
        if (status > 5) {
          status = 5;
        }

        return { ...row, status: status };
      }
      return row;
    });

    setData(updatedData);

    try {
      const response = await axios.put(
        `${baseURL}/applications/statusUpdate/${id}`,
        {
          status: updatedData.find((row) => row.id === id)?.status,
        }
      );

      console.log("Status updated successfully");
    } catch (error) {
      console.error("An error occurred while updating data:", error);
    }
  };

  
  return (
    <ThemeProvider theme={mainTheme}>
    
      <AdminNavbar heading="Admin Dashboard" role = {`${role}`}/>
      {filteredData.map((row) => (
        <Card
          key={row.id}
          sx={{
            mt: 10,
            ml: 10,
            mr: 5,
            width: "auto",
            height: "auto",
            border: "1px solid",
            borderColor: "primary.main",
          }}
        >
          <CardHeader
            sx={{ bgcolor: "primary.main", color: "white.main" }}
            title={`${row.firstName} ${row.lastName}`}
          />

          <CardContent>
            <Grid container spacing={2}>
              <Grid item sx={{ flexGrow: 1 }}>
                <ViewForm id={row.id} />
                <DownloadForm id={row.id} />
                <SendQuery id={row.id} />
              
                {row.status < 5 ? (
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "#27d027",
                      color: "#fff",
                      fontWeight: "bold",
                      padding: "8px 16px",
                      width: `${width}`,
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#27d027",
                        border: "1.5px solid #27d027",
                      },
                    }}
                    onClick={() => handleUpdateStatus(row.id)}
                  >
                    {row.status < 2 ? (
                      <><TaskIcon />&nbsp; Verify Document</>
                    ) : row.status < 3 ? (
                      <><HourglassTopIcon />&nbsp; Technical Approval</>
                    ) : row.status < 4 ? (
                      <><AccountBalanceWalletIcon /> &nbsp; Accounts Approval</>
                    ) : row.status < 5 ? (
                      <><CurrencyRupeeIcon />&nbsp; Subsidy Paid</>
                    ) : null}
                  </Button>
                ) : null}
              </Grid>

              <Grid item>
                <Stack direction="row">
                  <Typography variant="h6">Modified Date:</Typography>
                  <Typography variant="subtitle1">
                    {row.modifiedDate}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography variant="h6">Submitted Date:</Typography>
                  <Typography variant="subtitle1">
                    {row.submittedDate}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            <Grid container spacing={2} mt={2}>
              <Grid item>
                <Stack direction="row">
                  <Typography variant="h6">Application Number: </Typography>
                  <Typography variant="subtitle1">
                    {row.Application_No}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={2}>
              <Grid item>
                <Stack direction="row">
                  <Typography variant="h6">
                    Vechile Registration Number:{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    {row.registrationNumber}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography variant="h6">Battery Capacity: </Typography>
                  <Typography variant="subtitle1">
                    {row.batteryCapacity}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography variant="h6">Vehicle Type: </Typography>
                  <Typography variant="subtitle1">{row.vehicleType}</Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={2} mb={6}>
              <Grid item>
                <Stack direction="row">
                  <Typography variant="h6">Subsidy Amouunt:</Typography>
                  <Typography variant="subtitle1">121456</Typography>
                </Stack>
              </Grid>
            </Grid>

            <Steps id={row.id} status={row.status} />
          </CardContent>
        </Card>
      ))}
    </ThemeProvider>
  );
};

export default AdminApplicationList;
