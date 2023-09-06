import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CssBaseline, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import mainTheme from "../../../assets/theme/mainTheme";

const useStyles = makeStyles((theme) => ({
  fieldHeading: {
    fontWeight: "600 !important",
    marginBottom: "15px !important",
  },
}));
const RegistrationDetails = ({ errors, values, handleChange , touched }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Card className={classes.card}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6} sm={6} lg={4}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Vehicle Registration Number
              </Typography>
              <TextField
                name="registrationNumberSearch"
                label="Vehicle Registration Number"
                value={values.registrationNumberSearch}
                onChange={handleChange}
                error={!!errors.registrationNumberSearch}
                helperText={errors.registrationNumberSearch}
                fullWidth
              />
              <Button variant="contained" className={classes.button}>
                Search
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Grid container rowSpacing={3} spacing={2}>
            <Grid item xs={6} md={6} sm={6} lg={4}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Registration Date
              </Typography>
              <TextField
                name="regDate"
                type="date"
                // label="Registration Date"
                value={values.regDate}
                onChange={handleChange}
                error={!!errors.regDate}
                helperText={errors.regDate}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={4}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Registration Number
              </Typography>
              <TextField
                name="regNo"
                label="Registration Number"
                value={values.regNo}
                onChange={handleChange}
                error={!!errors.regNo}
                helperText={errors.regNo}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={4}>
              <Typography variant="body1" className={classes.fieldHeading}>
                RTO Office Details
              </Typography>
              <TextField
                name="rtoDet"
                label="RTO Office Details"
                value={values.rtoDet}
                onChange={handleChange}
                error={!!errors.rtoDet}
                helperText={errors.rtoDet}
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default RegistrationDetails;
