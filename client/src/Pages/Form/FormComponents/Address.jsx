import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Card, CardContent, Typography,ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import mainTheme from "../../../assets/theme/mainTheme";

const useStyles = makeStyles((theme) => ({
  fieldHeading: {
    fontWeight: "600 !important",
    marginBottom: "15px !important",
  },
  card: {
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",  
    borderRadius: "8px",
    marginBottom: "16px",
  },
}));

const Address = ({ errors, values, handleChange }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={mainTheme}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container rowSpacing={3} spacing={2}>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <Typography variant="body1" className={classes.fieldHeading}>
                House No.
              </Typography>
              <TextField
                name="houseNo"
                label="House Number"
                value={values.houseNo}
                onChange={handleChange}
                error={!!errors.houseNo}
                helperText={errors.houseNo}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <Typography variant="body1" className={classes.fieldHeading}>
                District
              </Typography>
              <TextField
                name="district"
                label="District"
                value={values.district}
                onChange={handleChange}
                error={!!errors.district}
                helperText={errors.district}
                fullWidth
              />
            </Grid>
          </Grid>
      <br />
      <br />
          <Grid container rowSpacing={3} spacing={2}>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <Typography variant="body1" className={classes.fieldHeading}>
                City
              </Typography>
              <TextField
                name="city"
                label="City"
                value={values.city}
                onChange={handleChange}
                error={!!errors.city}
                helperText={errors.city}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Pincode
              </Typography>
              <TextField
                name="pincode"
                label="Pincode"
                value={values.pincode}
                onChange={handleChange}
                error={!!errors.pincode}
                helperText={errors.pincode}
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default Address;
