import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FileInput from "../../assets/OtherAssets/FileUploadFileInput";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, useMediaQuery, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import mainTheme from "../../assets/theme/mainTheme";
import baseURL from "../../assets/config";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "#CCCCFF",
    padding: theme.spacing(5),
  },
  card: {
    borderRadius: "15px",
    backgroundColor: "#fff",
    color: "#000",
  },
  formLabel: {
    color: "#685BC7",
  },
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  button: {
    backgroundColor: "#fff",
    color: "#685BC7",
    fontWeight: "bold",
    marginTop: theme.spacing(4),
  },
}));



export default function FileUpload() {
  const { id } = useParams(); // Get the id from the URL params
  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);

  const [aadhaarCardFile, setAadhaarCardFile] = useState(null);
  const [residenceProofFile, setResidenceProofFile] = useState(null);
  const [drivingLicenceFile, setdrivingLicenceFile] = useState(null);
  const [vehicleRCFile, setvehicleRCFile] = useState(null);
  const [vehicleInsuranceFile, setvehicleInsuranceFile] = useState(null);
  const [taxInvoiceFile, settaxInvoiceFile] = useState(null);

  const [display, setDisplay] = useState(null);

  const markers = useMediaQuery(mainTheme.breakpoints.down("sm"));

  useEffect(() => {
    markers ? setDisplay("none") : setDisplay("flex");
  }, [markers]);

  const [editedData, setEditedData] = useState({
    aadharCard: "",
    residenceProof: "",
    drivingLicence: "",
    vehicleRC: "",
    vehicleInsurance: "",
    taxInvoice: "",
  });

  useEffect(() => {
    axios
      .get(`${baseURL}/applications/formData/${id}`) // Use the id from params
      .then((res) => {
        setData(res.data);

        if (res.data.length > 0) {
          const data = res.data[0];
          setEditedData({
            aadharCard: data.aadhaarCard,
            residenceProof: data.residenceProof,
            drivingLicence: data.drivingLicence,
            vehicleRC: data.vehicleRC,
            vehicleInsurance: data.vehicleInsurance,
            taxInvoice: data.taxInvoice,
            folderName: data.folderName,
            // Set initial values for other fields...
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  //   console.log(id)
  const handleFilesChange = (file) => {
    setSelectedFile(file);
  };
  const handleAadhaarCardFileChange = (files) => {
    setAadhaarCardFile(files[0]); // Access the first file from the FileList object
  };

  const handleResidenceProofFileChange = (files) => {
    setResidenceProofFile(files[0]); // Access the first file from the FileList object
  };

  const handledrivingLicenceFileChange = (files) => {
    setdrivingLicenceFile(files[0]); // Access the first file from the FileList object
  };

  const handlevehicleRCFileChange = (files) => {
    setvehicleRCFile(files[0]); // Access the first file from the FileList object
  };
  const handlesetvehicleInsuranceChange = (files) => {
    setvehicleInsuranceFile(files[0]); // Access the first file from the FileList object
  };
  const handletaxInvoiceChange = (files) => {
    settaxInvoiceFile(files[0]); // Access the first file from the FileList object
  };

  const handleSave = () => {

    alert("Your Files Have Been Succeessfully Uploaded !")
    if (true) {
      const formData = new FormData();

      if (aadhaarCardFile) {
        formData.append("file", aadhaarCardFile);
        formData.append("fileType", "aadhaar");
      }

      if (residenceProofFile) {
        formData.append("file", residenceProofFile);
        formData.append("fileType", "residence");
      }
      if (drivingLicenceFile) {
        formData.append("file", drivingLicenceFile);
        formData.append("fileType", "drivinglicence");
      }
      if (vehicleRCFile) {
        formData.append("file", vehicleRCFile);
        formData.append("fileType", "vehiclerc");
      }
      if (vehicleInsuranceFile) {
        formData.append("file", vehicleInsuranceFile);
        formData.append("fileType", "vehicleinsurance");
      }
      if (taxInvoiceFile) {
        formData.append("file", taxInvoiceFile);
        formData.append("fileType", "taxinvoice");
      }

      axios
        .put(
          `${baseURL}/editfileupload/${editedData.folderName}`,
          formData
        )
        .then((res) => {
          // Handle the response or perform any necessary actions
          console.log("Files uploaded successfully");
        })
        .catch((error) => {
          console.error(error);
        });

      setAadhaarCardFile(null); // Reset Aadhaar Card file state
      setResidenceProofFile(null); // Reset Residence Proof file state
      setdrivingLicenceFile(null);
      setvehicleInsuranceFile(null);
      setvehicleRCFile(null);
      settaxInvoiceFile(null);

      
    }
  };
  const classes = useStyles();
  return (
    <ThemeProvider theme={mainTheme}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} md={8}>
          <TextField
            label="Aadhar Card File"
            variant="outlined"
            fullWidth
            value={editedData.aadharCard}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                aadharCard: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FileInput
            label="Upload Aadhar Card"
            onChange={handleAadhaarCardFileChange}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            label="Residence Proof File"
            variant="outlined"
            fullWidth
            value={editedData.residenceProof}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                residenceProof: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FileInput
            label="Upload Residence Proof"
            onChange={handleResidenceProofFileChange}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            label="Driving Licence File"
            variant="outlined"
            fullWidth
            value={editedData.drivingLicence}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                drivingLicence: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FileInput
            label="Upload Driving Licence"
            onChange={handledrivingLicenceFileChange}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            label="Vehicle RC File"
            variant="outlined"
            fullWidth
            value={editedData.vehicleRC}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                vehicleRC: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FileInput
            label="Upload Vehicle RC"
            onChange={handlevehicleRCFileChange}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            label="Vehicle Insurance File"
            variant="outlined"
            fullWidth
            value={editedData.vehicleInsurance}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                vehicleInsurance: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FileInput
            label="Upload Vehicle Insurance"
            onChange={handlesetvehicleInsuranceChange}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            label="Tax Invoice File"
            variant="outlined"
            fullWidth
            value={editedData.taxInvoice}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                taxInvoice: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FileInput
            label="Upload Tax Invoice"
            onChange={handletaxInvoiceChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button href="/user" onClick={handleSave}>Save</Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
