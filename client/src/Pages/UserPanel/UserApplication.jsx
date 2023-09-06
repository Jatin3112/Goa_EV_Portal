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
import mainTheme from "../../assets/theme/mainTheme";
import UserNavbar from "./UserNavbar";
import UserViewForm from "./UserApplicationComponents/UserViewForm";
import UserSeeQuery from "./UserApplicationComponents/UserSeeQuery";
import UserDownloadForm from "./UserApplicationComponents/UserDownloadForm";
import axios from "axios";
import Steps from "../../assets/Stepper/Steps";
import baseURL from "../../assets/config";

const UserApplication = () => {
  const [width, setWidth] = useState(null);
  const [data, setData] = useState([]);

  const number = localStorage.getItem("number");

  const fetchData = async () => {
    const response = await axios.get(
      `${baseURL}/userCard/${number}`
    );

    setData(response.data);
  };

  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  const markers = useMediaQuery(mainTheme.breakpoints.down("sm"));

  useEffect(() => {
    if (markers) {
      setWidth("100%");
    } else {
      setWidth("auto");
    }
  }, [markers]);

  return (
    <ThemeProvider theme={mainTheme}>
      {data.map((row) => (
        <>
          <UserNavbar heading={`Hello ${row.firstName}`} />
          <Card
            sx={{
              mt: 10,
              ml: 10,
              mr: 5,
              width: "auto",
              height: "auto",
              border: "1px solid",
              borderColor: "primary.main",
            }}
            key={row.id}
          >
            <CardHeader
              sx={{ bgcolor: "primary.main", color: "white.main" }}
              title={`${row.firstName} ${row.lastName}`}
            />

            <CardContent>
              <Grid container spacing={2}>
                <Grid item sx={{ flexGrow: 1 }}>
                  <UserViewForm />
                  <UserDownloadForm />
                  <UserSeeQuery />
                  <Button
                    sx={{ width: `${width}` }}
                    href={`/editform/${row.id}`} // Pass the id as part of the URL
                  >
                    Edit Form
                  </Button>
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
                    <Typography variant="subtitle1">
                      {row.vehicleType}
                    </Typography>
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
        </>
      ))}
    </ThemeProvider>
  );
};

export default UserApplication;
