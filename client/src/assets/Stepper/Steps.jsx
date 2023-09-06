import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  StepLabel,
  Step,
  Stepper,
  Box,
  useMediaQuery,
} from "@mui/material";
import mainTheme from "../theme/mainTheme";
import baseURL from "../config";

const steps = [
  "Application Submission",
  "Document Verification",
  "Technical Approval",
  "Accounts Approval",
  "Subsidy Paid",
];

export default function Steps({id,status}) {
  const [activeStep, setActiveStep] = useState(1);

  const getData = async () => {
    try {
      const response = await fetch(
        `${baseURL}/applications/status/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      setActiveStep(data[0].status);
    } catch (error) {
      console.error(error);
      // Handle the error accordingly
    }
  };

  useEffect(() => {
    getData();
  }, [status]);


  return (
    <ThemeProvider theme={mainTheme}>
      <Box>
        <Stepper activeStep={parseInt(activeStep)} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step
                key={label}
                {...stepProps}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "success.main", // Completed stepCircle Color
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                    {
                      color: "grey.main", // Completed Label Color
                    },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "primary.main", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: "grey.main", // Active Label Color
                    },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "white.main", // Inside Circle Color
                  },
                }}
              >
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </ThemeProvider>
  );
}
