import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  useMediaQuery,
  Card,
  CardHeader,
  CardContent,
  Stack,
  Divider,
  Modal,
  Button,
} from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import axios from "axios";
import FileDownload from "js-file-download";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import baseURL from "../../../assets/config";

export default function ViewForm({ id }) {
  const [width, setWidth] = useState(null);
  const [btnWidth, setBtnWidth] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [folderName, setFolderName] = useState("");
  const [files, setFiles] = useState([]);

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


  const fetchFiles = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/userFiles/${number}`
      );
      
      setFiles(response.data);
    } catch (error) {
      console.error(error);
    }
  };
 useEffect(() =>{
    fetchFiles()
 },[data])

  const downloadFile = async (fileName) => {
    try {
      const response = await axios.get(
        `${baseURL}/userFiles/${number}/${fileName}`,
        {
          responseType: "blob",
        }
      );
      FileDownload(response.data, fileName);
      // setFileDownloaded(true);
    } catch (error) {
      console.error(error);
    }
  };


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const markers = useMediaQuery(mainTheme.breakpoints.down("sm"));

  useEffect(() => {
    markers ? setWidth("90%") : setWidth("40%");
    markers ? setBtnWidth("100%") : setBtnWidth("auto");
  }, [markers]);

  const style = {
    position: "absolute",
    top: "157%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { width },
    bgcolor: "background.paper",
  };
  const flexItems = {
    display: "flex",
    justifyContent: "space-between",
  };

  const header = {
    bgcolor: "primary.main",
    color: "white.main",
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Button onClick={handleOpen} sx={{ width: btnWidth }}>
        View Form
      </Button>
      <Modal style={{ overflow: "scroll" }} open={open} onClose={handleClose}>
        <Box sx={style}>
          {data.map((row) => (
            <Card sx={{ borderRadius: "0" }} key={row.key}>
              <CardHeader title="Application Form" sx={header} />

              <CardContent>
                <Card
                  sx={{
                    margin: 4,
                    border: "1px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <CardHeader sx={header} title="Personal Details" />

                  <CardContent>
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Full Name</Typography>
                      <Typography variant="body1">{`${row.firstName} ${row.lastName}`}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Phone Number</Typography>
                      <Typography variant="body1">{row.number}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Email ID</Typography>
                      <Typography variant="body1">{row.email}</Typography>
                    </Stack>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    margin: 4,
                    border: "1px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <CardHeader sx={header} title="Vechile Details" />

                  <CardContent>
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Vehicle Type</Typography>
                      <Typography variant="body1">{row.vehicleType}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Wheeler Type</Typography>
                      <Typography variant="body1">{row.wheelerType}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Battery Capacity</Typography>
                      <Typography variant="body1">{row.batteryCapacity}</Typography>
                    </Stack>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    margin: 4,
                    border: "1px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <CardHeader sx={header} title="Registration Details" />

                  <CardContent>
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">
                        Registration Number
                      </Typography>
                      <Typography variant="body1">{`no`}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Registration Date</Typography>
                      <Typography variant="body1">{row.registrationDate}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">
                        RTO Office Details
                      </Typography>
                      <Typography variant="body1">{row.rtoDetails}</Typography>
                    </Stack>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    margin: 4,
                    border: "1px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <CardHeader sx={header} title="Address Details" />

                  <CardContent>
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">House Number</Typography>
                      <Typography variant="body1">{row.houseNumber}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">District</Typography>
                      <Typography variant="body1">{row.district}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">City</Typography>
                      <Typography variant="body1">{row.city}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Pincode</Typography>
                      <Typography variant="body1">{row.pincode}</Typography>
                    </Stack>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    margin: 4,
                    border: "1px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <CardHeader sx={header} title="Bank Details" />

                  <CardContent>
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Account Number</Typography>
                      <Typography variant="body1">{row.accountNumber}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Holder Name</Typography>
                      <Typography variant="body1">{row.accountHolderName}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">IFSC Code</Typography>
                      <Typography variant="body1">{row.ifscCode}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Bank Name</Typography>
                      <Typography variant="body1">{row.bankName}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Branch Name</Typography>
                      <Typography variant="body1">{row.branchName}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Processing Fees</Typography>
                      <Typography variant="body1">{row.processingFees}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">
                        Total Processing Fees
                      </Typography>
                      <Typography variant="body1">{row.totalProcessingFees}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">GST</Typography>
                      <Typography variant="body1">{row.gst}</Typography>
                    </Stack>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    margin: 4,
                    border: "1px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <CardHeader sx={header} title="Files" />

                  <CardContent>
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Aadhaar Card</Typography>
                      <Box>
                        <Typography variant="body1">{row.aadhaarCardNumber}</Typography>
                        {files.length > 0 && (
                          <Button onClick={() => downloadFile(files[0])}>
                            <FileDownloadIcon />
                          </Button>
                        )}
                      </Box>
                    </Stack>

                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Residence Proof</Typography>
                      <Box>
                        <Typography variant="body1">{row.residenceProofNumber}</Typography>
                        {files.length > 0 && (
                          <Button onClick={() => downloadFile(files[1])}>
                            <FileDownloadIcon />
                          </Button>
                        )}
                      </Box>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Driving Licence</Typography>
                      <Box>
                        <Typography variant="body1">{row.drivingLicenceNumber}</Typography>
                        {files.length > 0 && (
                          <Button onClick={() => downloadFile(files[2])}>
                            <FileDownloadIcon />
                          </Button>
                        )}
                      </Box>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Tax Invoice</Typography>
                      <Box>
                        <Typography variant="body1">{row.taxInvoiceNumber}</Typography>
                        {files.length > 0 && (
                          <Button onClick={() => downloadFile(files[3])}>
                            <FileDownloadIcon />
                          </Button>
                        )}
                      </Box>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Vechile RC</Typography>
                      <Box>
                        <Typography variant="body1">{row.vechileRCNumber}</Typography>
                        {files.length > 0 && (
                          <Button onClick={() => downloadFile(files[4])}>
                            <FileDownloadIcon />
                          </Button>
                        )}
                      </Box>
                    </Stack>
                    <Divider />
                    <Stack direction="row" m={2} sx={flexItems}>
                      <Typography variant="body1">Vechile Insurance</Typography>
                      <Box>
                        <Typography variant="body1">{row.vehicleInsuranceNumber}</Typography>
                        {files.length > 0 && (
                          <Button onClick={() => downloadFile(files[5])}>
                            <FileDownloadIcon />
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
