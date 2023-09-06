import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  Card,
  Paper,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import mainTheme from "../../assets/theme/mainTheme";
import AdminNavbar from "./AdminBar/AdminNavbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CountUp from "react-countup";
import axios from "axios";
import baseURL from "../../assets/config";

const stackDisplay = {
  display: "flex",
  justifyContent: "flex-start",
};

const cardContent = {
  mt: 2,
  ml: 2,
  textAlign: "left",
};

function AdminHomePage() {
  const [applicationSubmitCount, setApplicationSubmitCount] = useState(0);
  const [documentVerifiedCount, setDocumentVerifiedCount] = useState(0);
  const [documentVerificationPending, setDocumentVerificationPending] =
    useState(0);
  const [technicalVerifiedCount, setTechnicalVerifiedCount] = useState(0);
  const [accountsVerifiedCount, setAccountsVeriedCount] = useState(0);
  const [subsidyPaidCount, setSubsidyPaidCount] = useState(0);
  const [subsidyVerificationPending, setSubsidyVerificationPending] =
    useState(0);
  const [querySentCount, setQuerySentCount] = useState(0);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/admin/status`);
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    const applicationCount = data.reduce((count, row) => {
      if (row.status > 0) {
        return count + 1;
      }
      return count;
    }, 0);
    setApplicationSubmitCount(applicationCount);

    const documentCount = data.reduce((count, row) => {
      if (row.status > 1) {
        return count + 1;
      }
      return count;
    }, 0);
    setDocumentVerifiedCount(documentCount);

    const documentPendingCount = data.length - documentCount;
    setDocumentVerificationPending(documentPendingCount);

    const technicalCount = data.reduce((count, row) => {
      if (row.status > 2) {
        return count + 1;
      }
      return count;
    }, 0);
    setTechnicalVerifiedCount(technicalCount);

    const accountsCount = data.reduce((count, row) => {
      if (row.status > 3) {
        return count + 1;
      }
      return count;
    }, 0);
    setAccountsVeriedCount(accountsCount);

    const subsidyPaidCount = data.reduce((count, row) => {
      if (row.status > 4) {
        return count + 1;
      }
      return count;
    }, 0);
    setSubsidyPaidCount(subsidyPaidCount);

    const subsidyPendingCount = data.length - subsidyPaidCount;
    setSubsidyVerificationPending(subsidyPendingCount);

    const queryAdded = data.reduce((count, row) => {
      if (row.query !== "") {
        return count + 1;
      }
      return count;
    }, 0);
    setQuerySentCount(queryAdded);
  }, [data]);


  return (
    <ThemeProvider theme={mainTheme}>
      <AdminNavbar />

      <Paper sx={{ mt: 10, ml: 10, mr: 5 }}>
        <Grid container spacing={2} sx={{ mt: 5, mr: 5 }}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: 150,
                width: "auto",
                backgroundColor: "#f4b183",
                color: "white.main",
              }}
            >
              <Stack direction="row" spacing={0} mt={4} sx={stackDisplay}>
                <AccountCircleIcon />
                <Typography variant="h6">
                  <CountUp start={0} end={applicationSubmitCount} />
                </Typography>
              </Stack>
              <Typography variant="h6" sx={cardContent}>
                Applications Submitted
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: 150,
                width: "auto",
                backgroundColor: "#7f7f7f",
                color: "white.main",
              }}
            >
              <Stack direction="row" spacing={0} mt={4} sx={stackDisplay}>
                <AccountCircleIcon />
                <Typography variant="h6">
                  <CountUp start={0} end={documentVerificationPending} />
                </Typography>
              </Stack>
              <Typography variant="h6" sx={cardContent}>
                Document Verification Pending
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: 150,
                width: "auto",
                backgroundColor: "#58a8c4",
                color: "white.main",
              }}
            >
              <Stack direction="row" spacing={0} mt={4} sx={stackDisplay}>
                <AccountCircleIcon />
                <Typography variant="h6">
                  <CountUp start={0} end={documentVerifiedCount} />
                </Typography>
              </Stack>
              <Typography variant="h6" sx={cardContent}>
                Documents Verified
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: 150,
                width: "auto",
                backgroundColor: "#ae3030",
                color: "white.main",
              }}
            >
              <Stack direction="row" spacing={0} mt={4} sx={stackDisplay}>
                <AccountCircleIcon />
                <Typography variant="h6">
                  <CountUp start={0} end={technicalVerifiedCount} />
                </Typography>
              </Stack>
              <Typography variant="h6" sx={cardContent}>
                Technical Verification
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: 150,
                width: "auto",
                backgroundColor: "#4e4376",
                color: "white.main",
              }}
            >
              <Stack direction="row" spacing={0} mt={4} sx={stackDisplay}>
                <AccountCircleIcon />
                <Typography variant="h6">
                  <CountUp start={0} end={accountsVerifiedCount} />
                </Typography>
              </Stack>
              <Typography variant="h6" sx={cardContent}>
                Accounts Verification
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: 150,
                width: "auto",
                backgroundColor: "#c81008",
                color: "white.main",
              }}
            >
              <Stack direction="row" spacing={0} mt={4} sx={stackDisplay}>
                <AccountCircleIcon />
                <Typography variant="h6">
                  <CountUp start={0} end={subsidyVerificationPending} />
                </Typography>
              </Stack>
              <Typography variant="h6" sx={cardContent}>
                Subsidy Paid Verifiaction Pending
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: 150,
                width: "auto",
                backgroundColor: "#35aa47",
                color: "white.main",
              }}
            >
              <Stack direction="row" spacing={0} mt={4} sx={stackDisplay}>
                <AccountCircleIcon />
                <Typography variant="h6">
                  <CountUp start={0} end={subsidyPaidCount} />
                </Typography>
              </Stack>
              <Typography variant="h6" sx={cardContent}>
                Subsidy Paid Verified
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: 150,
                width: "auto",
                backgroundColor: "#000000",
                color: "white.main",
              }}
            >
              <Stack direction="row" spacing={0} mt={4} sx={stackDisplay}>
                <AccountCircleIcon />
                <Typography variant="h6">
                  <CountUp start={0} end={querySentCount} />
                </Typography>
              </Stack>
              <Typography variant="h6" sx={cardContent}>
                Subsidy Paid Under Query
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default AdminHomePage;
