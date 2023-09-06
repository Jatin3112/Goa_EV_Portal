import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Card,
  CardContent,
  ThemeProvider,
  TextField,
  CssBaseline,
  Button,
} from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import FileInput from "../../../assets/OtherAssets/FileInput";

const useStyles = makeStyles((theme) => ({
  fieldHeading: {
    fontWeight: "600 !important",
    fontSize: "14px !important",
    marginBottom: "5px !important",
  },
}));

const BankDetails = ({ errors, values, handleChange }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Card sx={{ width: "auto" }}>
        <CardContent>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={6} md={2} lg={6}>
                <Typography variant="body1" className={classes.fieldHeading}>
                  Account Number
                </Typography>
                <TextField
                  label="Account Number"
                  name="accountNo"
                  value={values.accountNo}
                  onChange={handleChange}
                  error={!!errors.accountNo}
                  helperText={errors.accountNo}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={6}>
                <Typography variant="body1" className={classes.fieldHeading}>
                  Account Holder Name
                </Typography>
                <TextField
                  name="holderName"
                  label="Account Holder Name"
                  ame
                  value={values.holderName}
                  onChange={handleChange}
                  error={!!errors.holderName}
                  helperText={errors.holderName}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={6} md={3} lg={6}>
                <Typography variant="body1" className={classes.fieldHeading}>
                  IFSC Code
                </Typography>
                <TextField
                  name="ifscCode"
                  label="IFSC Code"
                  value={values.ifscCode}
                  onChange={handleChange}
                  error={!!errors.ifscCode}
                  helperText={errors.ifscCode}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={6}>
                <Typography variant="body1" className={classes.fieldHeading}>
                  Bank Name
                </Typography>
                <TextField
                  name="bankName"
                  label="Bank Name"
                  value={values.bankName}
                  onChange={handleChange}
                  error={!!errors.bankName}
                  helperText={errors.bankName}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={6} md={3} lg={6}>
                <Typography variant="body1" className={classes.fieldHeading}>
                  Bank Branch Name
                </Typography>
                <TextField
                  label="Bank Branch Name"
                  name="branchName"
                  value={values.branchName}
                  onChange={handleChange}
                  error={!!errors.branchName}
                  helperText={errors.branchName}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={6}>
                <Typography variant="body1" className={classes.fieldHeading}>
                  Processing Fees
                </Typography>
                <TextField
                  label="Processing Fees"
                  name="processingFees"
                  value={values.processingFees}
                  onChange={handleChange}
                  error={!!errors.processingFees}
                  helperText={errors.processingFees}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={6} md={3} lg={6}>
                <Typography variant="body1" className={classes.fieldHeading}>
                  Total Processing Fees
                </Typography>
                <TextField
                  label="Total Processing Fees"
                  name="totalProcessingFees"
                  value={values.totalProcessingFees}
                  onChange={handleChange}
                  error={!!errors.totalProcessingFees}
                  helperText={errors.totalProcessingFees}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={6}>
                <Typography variant="body1" className={classes.fieldHeading}>
                  GST at 18%
                </Typography>
                <TextField
                  name="gst"
                  label="GST at 18%"
                  value={values.gst}
                  onChange={handleChange}
                  error={!!errors.gst}
                  helperText={errors.gst}
                />
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid item xs={12}>
            <Grid container>
             
              <Grid item xs={12} sm={6} md={3} lg={4}>
              <Typography variant="body1" sx={{fontWeight:"600", mt:5}}>Cancelled Cheque</Typography>
                <FileInput
                  name="file7"
                  label="Document 1"
                  value={values.file7}
                  onChange={handleChange}
                  error={!!errors.file7}
                  helperText={errors.file7}
                  fileName={values.file7.name}
                />
              </Grid>
              
              <Grid item xs={12} sm={6} md={3} lg={4}>
              <Typography variant="body1" sx={{fontWeight:"600", mt:5}}>Bank Statement 1</Typography>
                <FileInput
                  name="file8"
                  label="Document 2"
                  value={values.file8}
                  onChange={handleChange}
                  error={!!errors.file8}
                  helperText={errors.file8}
                  fileName={values.file8.name}
                />
              </Grid>
              
              <Grid item xs={12} sm={6} md={3} lg={4}>
              <Typography variant="body1" sx={{fontWeight:"600", mt:5}}>Bank Statement 2</Typography>
                <FileInput
                  name="file9"
                  label="Document 3"
                  value={values.file9}
                  onChange={handleChange}
                  error={!!errors.file9}
                  helperText={errors.file9}
                  fileName={values.file9.name}
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default BankDetails;
