import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Button, Grid, useMediaQuery, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import mainTheme from "../../assets/theme/mainTheme";
import baseURL from "../../assets/config";

export default function PersonalDetails() {
  const { id } = useParams(); // Get the id from the URL params

  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);

  const [display, setDisplay] = useState(null);

  const markers = useMediaQuery(mainTheme.breakpoints.down("sm"));

  useEffect(() => {
    markers ? setDisplay("none") : setDisplay("flex");
  }, [markers]);

  const [editedData, setEditedData] = useState({
    fullName: "",
    number: "",
    email: "",
    regNo: "",
    regDate: "",
    rtoDet: "",
    vehicleType: "",
    wheelerType: "",
    batteryCapacity: "",
    houseNo: "",
    district: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    axios
      .get(`${baseURL}/applications/formData/${id}`) // Use the id from params
      .then((res) => {
        setData(res.data);
        if (res.data.length > 0) {
          const data = res.data[0];
          setEditedData({
            fullName: `${data.firstName} ${data.lastName}`,
            number: data.number,
            email: data.email,
            regNo: data.regNo,
            regDate: data.regDate,
            rtoDet: data.rtoDet,
            vehicleType: data.vehicleType,
            wheelerType: data.wheelerType,
            batteryCapacity: data.batteryCapacity,
            houseNo: data.houseNo,
            district: data.district,
            city: data.city,
            pincode: data.pincode,
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

  
  const handleSave = () => {

    alert("Your Form Is Updated Successfully !")
    axios
      .put(`${baseURL}/update_application/${id}`, editedData)
      .then((res) => {
        // Handle the response or perform any necessary actions
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // const classes = useStyles();
  return (
    <ThemeProvider theme={mainTheme}>
      <Grid container spacing={3}  style={{ marginTop: "0em" }} sx={{display:'flex', justifyContent:"center", alignItems:"center"}}>
        <Grid item xs={12} md={5}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            value={editedData.fullName}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                fullName: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={editedData.email}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            value={editedData.number}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                number: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="Registration Number"
            variant="outlined"
            fullWidth
            value={editedData.regNo}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                regNo: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="Registration Date"
            variant="outlined"
            fullWidth
            value={editedData.regDate}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                regDate: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="RTO Office Details"
            variant="outlined"
            fullWidth
            value={editedData.rtoDet}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                rtoDet: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={3.35}>
          <TextField
            label="Vehicle Type"
            variant="outlined"
            fullWidth
            value={editedData.vehicleType}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                vehicleType: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={3.35}>
          <TextField
            label="Wheeler Type"
            variant="outlined"
            fullWidth
            value={editedData.wheelerType}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                wheelerType: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={3.35}>
          <TextField
            label="Battery Capacity"
            variant="outlined"
            fullWidth
            value={editedData.batteryCapacity}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                batteryCapacity: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={editedData.houseNo}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                houseNo: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            value={editedData.city}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                city: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="District"
            variant="outlined"
            fullWidth
            value={editedData.district}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                district: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="Pincode"
            variant="outlined"
            fullWidth
            value={editedData.pincode}
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                pincode: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <Button onClick={handleSave}>Save</Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
