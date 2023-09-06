import Grid from "@mui/material/Grid";
import { TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Card,
  CardContent,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import FileInput from "../../../assets/OtherAssets/FileInput";

const useStyles = makeStyles((theme) => ({
  fieldHeading: {
    fontWeight: "600 !important",
    marginBottom: "15px !important",
  },
  card: {
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
    marginBottom: "16px",
    padding: "20px",
  },
}));

const DocumentUploads = ({ errors, values, handleChange }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Card className={classes.card}>
        <CardContent>
          <Grid container rowSpacing={3} spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Aadhaar Card
              </Typography>
              <TextField
                label="Aadhaar Card Number"
                name="aadhaarCardNumber"
                value={values.aadhaarCardNumber}
                onChange={handleChange}
                error={!!errors.aadhaarCardNumber}
                helperText={errors.aadhaarCardNumber}
              />
             
              <FileInput
                name="file1"
                label="Aadhaar Card"
                value={values.file1}
                onChange={handleChange}
                error={!!errors.file1}
                helperText={errors.file1}
                fileName = {values.file1.name}
              />
              
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={4}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Residence Proof
              </Typography>
              <TextField
                label="Residence Proof"
                name="residenceProofNumber"
                value={values.residenceProofNumber}
                onChange={handleChange}
                error={!!errors.residenceProofNumber}
                helperText={errors.residenceProofNumber}
              />
              <FileInput
                name="file2"
                label="Residence Certificate"
                value={values.file2}
                onChange={handleChange}
                error={!!errors.file2}
                helperText={errors.file2}
                fileName = {values.file2.name}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={4}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Driving Licence
              </Typography>
              <TextField
                label="Licence Number"
                name="drivingLicenceNumber"
                value={values.drivingLicenceNumber}
                onChange={handleChange}
                error={!!errors.drivingLicenceNumber}
                helperText={errors.drivingLicenceNumber}
              />
              <FileInput
                name="file3"
                label="Driving License"
                value={values.drivingLicense}
                onChange={handleChange}
                error={!!errors.file3}
                helperText={errors.file3}
                fileName = {values.file3.name}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Tax Invoice
              </Typography>
              <TextField
                label="Tax Invoice Number"
                name="taxInvoiceNumber"
                value={values.taxInvoiceNumber}
                handleInputChange
                onChange={handleChange}
                error={!!errors.taxInvoiceNumber}
                helperText={errors.taxInvoiceNumber}
                
              />
              <FileInput
                name="file4"
                label="Tax Invoice"
                value={values.file4}
                onChange={handleChange}
                error={!!errors.file4}
                helperText={errors.file4}
                fileName = {values.file4.name}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={4}>
              <Typography variant="body1" className={classes.fieldHeading}>
                RC of Vehicle
              </Typography>
              <TextField
                label="RC Number"
                name="vehicleRCNumber"
                value={values.vehicleRCNumber}
                onChange={handleChange}
                error={!!errors.vehicleRCNumber}
                helperText={errors.vehicleRCNumber}
              />
              <FileInput
                name="file5"
                label="RC of Vehicle"
                value={values.file5}
                onChange={handleChange}
                error={!!errors.file5}
                helperText={errors.file5}
                fileName = {values.file5.name}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Vehicle Insurance
              </Typography>
              <TextField
                label="Insurance Number"
                name="vehicleInsuranceNumber"
                value={values.vehicleInsuranceNumber}
                onChange={handleChange}
                error={!!errors.vehicleInsuranceNumber}
                helperText={errors.vehicleInsuranceNumber}
              />
              <FileInput
                name="file6"
                label="Insurance of Vehicle"
                value={values.file6}
                onChange={handleChange}
                error={!!errors.file6}
                helperText={errors.file6}
                fileName = {values.file6.name}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default DocumentUploads;
