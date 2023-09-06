import React, { useState, useRef } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import PersonalDetails from "./PersonalDetails";
import FileUpload from "./FileUpload";
import { ThemeProvider } from "@mui/material";
import mainTheme from "../../assets/theme/mainTheme";

const steps = ["Personal Details", "File Upload"];

export default function Edit() {
  const [activeStep, setActiveStep] = useState(0);
  const personalDetailsRef = useRef(null);
  const fileUploadRef = useRef(null);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleFinish = () => {
    if (activeStep === steps.length - 1) {
      personalDetailsRef.current.handleSave();
      fileUploadRef.current.handleSave();
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalDetails handleSave={handleFinish} ref={personalDetailsRef} />
        );
      case 1:
        return <FileUpload handleSave={handleFinish} ref={fileUploadRef} />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep)}
      <Box style={{ marginTop: "10px" }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled = {activeStep===1}>
          Next
        </Button>
      </Box>
    </ThemeProvider>
  );
}
