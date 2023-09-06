import React, { useState, useEffect, useRef } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Paper,
  Box,
  Stack,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  List,
  Button,
  useMediaQuery,
} from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import axios from "axios";
import gedaLogo from "../../../assets/images/HomePage/gedaLogo.svg";
import ahaSolar from "../../../assets/images/HomePage/ahaSolarLogo.svg";
import baseURL from "../../../assets/config";

import { useReactToPrint } from "react-to-print";

const header = {
  backgroundColor: "primary.main",
  color: "white.main",
};

const stackDisplay = {
  display: "flex",
  justifyContent: "flex-start",
};

const UserDownloadForm = ({ id }) => {
  const [width, setWidth] = useState(null);
  const [data, setData] = useState([]);

  const number = localStorage.getItem("number");

  const fetchData = async () => {
    const response = await axios.get(
      `${baseURL}/userForm/${number}`
    );

    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Application Form",
    onAfterPrint: () => console.log("after print"),
  });

  const date = new Date().toLocaleDateString();

  const markers = useMediaQuery(mainTheme.breakpoints.down("sm"));

  useEffect(() => {
    markers ? setWidth("100%") : setWidth("auto");
  }, [markers]);

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Button onClick={handlePrint} sx={{ width: width }}>
        Download Form
      </Button>
      <Paper sx={{ display: "none" }}>
        <Paper ref={componentRef}>
          <Box>
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h4" align="center">
                <img src={gedaLogo} alt="gedaLogo" />
              </Typography>
              <Typography variant="body1" align="center">
                Electriv Vechile Department , Goa <br />
                Vidyut Bhavan, 5th Floor, Panaji, 403 001, <br />
                Goa Ph: 988787XXXX
              </Typography>
              <Typography variant="h4" align="center">
                <img src={ahaSolar} alt="ahaSolar" width={80} />
              </Typography>
            </Stack>
          </Box>
          {data.map((row) => (
            <>
              <Typography variant="h5" align="left" mt={5}>
                {`Application Number : ${row.Application_No}`}
              </Typography>

              <Card>
                <Card sx={{ mt: 5 }}>
                  <CardHeader title="EV Vechile Details" sx={header} />
                  <CardContent>
                    <Stack spacing={2} direction="row" sx={stackDisplay}>
                      <Stack spacing={2}>
                        <Typography variant="h6" m={0}>
                          Battery Capacity:
                        </Typography>
                        <Typography variant="h6">Vechile Type:</Typography>
                        <Typography variant="h6">Wheeler Type:</Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack spacing={2}>
                        <Typography variant="subtitle1">{row.batteryCapacity}</Typography>
                        <Typography variant="subtitle1">{row.vehicleType}</Typography>
                        <Typography variant="subtitle1">{row.wheelerType}</Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>

                <Card sx={{ mt: 3 }}>
                  <CardHeader title="Consumer Details" sx={header} />
                  <CardContent>
                    <Stack spacing={2} direction="row" sx={stackDisplay}>
                      <Stack spacing={2}>
                        <Typography variant="h6" m={0}>
                          Consumer Name:
                        </Typography>
                        <Typography variant="h6">
                          Registration Number:
                        </Typography>
                        <Typography variant="h6">Registration Date:</Typography>
                        <Typography variant="h6">RTO Details:</Typography>
                        <Typography variant="h6">Address:</Typography>
                        <Typography variant="h6">Email:</Typography>
                        <Typography variant="h6">Mobile:</Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack spacing={2}>
                        <Typography variant="subtitle1">{`${row.firstName} ${row.lastName}`}</Typography>
                        <Typography variant="subtitle1">{row.registrationNumber}</Typography>
                        <Typography variant="subtitle1">{row.registrationDate}</Typography>
                        <Typography variant="subtitle1">{row.rtoDetails}</Typography>
                        <Typography variant="subtitle1">{`${row.houseNumber} ${row.district} ${row.city} ,  ${row.pincode}`}</Typography>
                        <Typography variant="subtitle1">{row.email}</Typography>
                        <Typography variant="subtitle1">{row.number}</Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>

                <Card sx={{ mt: 3 }}>
                  <CardHeader title="Subsidy Provider Details" sx={header} />
                  <CardContent>
                    <Stack spacing={2} direction="row" sx={stackDisplay}>
                      <Stack spacing={2}>
                        <Typography variant="h6" m={0}>
                          Subsidy Provider:
                        </Typography>
                        <Typography variant="h6">Contact Number:</Typography>
                        <Typography variant="h6">Email:</Typography>
                        <Typography variant="h6">Amount:</Typography>
                        <Typography variant="h6">Created On:</Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack spacing={2}>
                        <Typography variant="subtitle1">
                          AHASolar Pvt. Ltd.
                        </Typography>
                        <Typography variant="subtitle1">
                          +91-9870312757
                        </Typography>
                        <Typography variant="subtitle1">
                          neha.p@ahasolar.in
                        </Typography>
                        <Typography variant="subtitle1">500</Typography>
                        <Typography variant="subtitle1">{date}</Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Card>
            </>
          ))}

          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6">Declaration:</Typography>
              <List>
                <Typography variant="subtitle1">
                  I am authorized to apply for Solar PV System and the
                  information filled is true and correct to my knowledge and
                  GEDA/GED is not responsible for providing land, the power
                  evacuation and water supply, for the operation/maintenance of
                  the power evacuation facilities and its uninterrupted
                  functioning. Further that GEDA is absolved from any loss that
                  may occur on account of failure of the substation/transmission
                  line and/or non-performance of any system of the project etc.
                  I have read and understood and shall abide by the provision of
                  the Goa Solar Policy – 2017.
                </Typography>
                <Typography variant="subtitle1">
                  The entire electrical safety, structural stability and
                  performance of the system shall be the entire responsibility
                  of the Applicant and GEDA shall be absolved of any
                  responsibility whatsoever that may arise during the lifespan
                  of the solar PV system..
                </Typography>
                <Typography variant="subtitle1">
                  This Application is submitted under Group Net Metering with
                  Consumer No. 60005627389 under which Rooftop Solar PV System
                  is to be Installed. P
                </Typography>
              </List>
            </CardContent>
          </Card>
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6">Undertaking:</Typography>
              <List>
                <Typography variant="subtitle1">
                  {" "}
                  I have on my OWN selected the Installer upon due diligence and
                  have mutually agreed with the terms and conditions amongst
                  ourselves{" "}
                </Typography>
                <Typography variant="subtitle1">
                  I am aware that GEDA has no role whatsoever in the selection
                  of the Installer/Vendor and thus GEDA/GED is not responsible
                  for INSTALLER’s technical and financial capabilities, quality
                  and integrity, any kind of delay; financial or technical loss,
                  quality and standards of the system and its components; theft,
                  financial transaction done or any criminal assault occurred
                  because of the selection of the Installer.{" "}
                </Typography>
                <Typography variant="subtitle1">
                  I am fully responsible for the Solar PV system that will be
                  installed under this application.
                </Typography>
                <Typography variant="subtitle1">
                  I agree to abide by the provisions of the Goa Solar Power
                  Policy-2017 with all amendments thereof.
                </Typography>
              </List>
            </CardContent>
          </Card>

          <Card>
            <Typography variant="h6" mt={2}>
              Date:
            </Typography>
          </Card>
          <Card sx={{ mt: 4 }}>
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h6">Signature of Cusumor:</Typography>
              <Typography variant="h6">
                On behalf of Emapanelled Agency with rubber stamp:
              </Typography>
            </Stack>
          </Card>
        </Paper>
      </Paper>
    </ThemeProvider>
  );
};

export default UserDownloadForm;
