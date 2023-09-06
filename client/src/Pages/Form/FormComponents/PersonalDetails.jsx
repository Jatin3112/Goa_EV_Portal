import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Card, CardContent, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
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

const PersonalDetails = ({ errors, values, handleChange }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={mainTheme}>
      <Card className={classes.card}>
        <CardContent>
      
          <Grid container rowSpacing={3} spacing={2}>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <Typography variant="body1" className={classes.fieldHeading}>
                First Name
              </Typography>
              <TextField
                fullWidth
                error={!!errors.firstName}
                name="firstName"
                label="First Name"
                value={values.firstName}
                helperText={errors.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Last Name
              </Typography>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                value={values.lastName}
                error={!!errors.lastName}
                helperText={errors.lastName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <br />
          <br />
        
          <Grid container rowSpacing={3} spacing={2}>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Email ID
              </Typography>
              <TextField
                error={!!errors.email}
                name="email"
                label="Email"
                value={values.email}
                helperText={errors.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <Typography variant="body1" className={classes.fieldHeading}>
                Phone
              </Typography>
              <TextField
                fullWidth
                type="number"
                error={!!errors.number}
                name="number"
                label="Phone Number"
                value={values.number}
                helperText={errors.number}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default PersonalDetails;
