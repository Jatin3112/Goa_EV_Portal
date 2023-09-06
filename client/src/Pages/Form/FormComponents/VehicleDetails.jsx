import TextField from "@mui/material/TextField";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Card,
  CardContent,
  Box,
  ThemeProvider,
} from "@mui/material";
import RadioGroup from "../../../assets/OtherAssets/RadioGroup";
import mainTheme from "../../../assets/theme/mainTheme";

const useStyles = makeStyles((theme) => ({
  labelBold: {
    fontWeight: "600 !important",
    color: "#000 !important",
  },
  card: {
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    marginBottom: "16px",
  },
  fieldHeading: {
    fontWeight: "600 !important",
    marginBottom: "15px !important",
  },
}));


const wheelerType = [
  { id: "two", title: <TwoWheelerIcon /> },
  { id: "three", title: <ElectricRickshawIcon  /> },
  { id: "four", title: <DriveEtaIcon /> },
];
const vehicleType = [
  { id: "New Vehicle", title: "New Vehicle" },
  { id: "Retrofitting of Vehicle", title: "Retrofitting of Vehicle" },
  { id: "scrap", title: "Scrap And New Vehicle" },
];

const VechileDetails = ({ errors, values, handleChange ,handleBlur}) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={mainTheme}>
      <Box>
        <Card className={classes.card}>
          <CardContent>
            <RadioGroup
              name="wheelerType"
              label={
                <Typography variant="body1" className={classes.labelBold}>
                  Wheeler Type
                </Typography>
              }
              value={values.wheelerType}
              onChange={handleChange}
              items={wheelerType}
              error={!!errors.wheelerType}
              helperText={errors.wheelerType}
              className={classes.iconBox}
            />
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <RadioGroup
              name="vehicleType"
              label={
                <Typography variant="body1" className={classes.labelBold}>
                  Vehicle Type
                </Typography>
              }
              value={values.vehicleType}
              onChange={handleChange}
              items={vehicleType}
              error={!!errors.vehicleType}
              helperText={errors.vehicleType}
            />
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body1" className={classes.fieldHeading}>
              Battery Capacity
            </Typography>
            <TextField
              fullWidth
              name="batteryCapacity"
              label="Battery Capacity (kWh)"
              value={values.batteryCapacity}
              onChange={handleChange}
              error={!!errors.batteryCapacity}
              helperText={errors.batteryCapacity}
              onBlur={handleBlur}
            />
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default VechileDetails;
