import * as React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import * as Yup from "yup";
import { FormikWizard } from "formik-wizard-form";
import VehicleDetails from "./FormComponents/VehicleDetails";
import RegistrationDetails from "./FormComponents/RegistrationDetails";
import PersonalDetails from "./FormComponents/PersonalDetails";
import Address from "./FormComponents/Address";
import DocumentUploads from "./FormComponents/DocumentUploads";
import BankDetails from "./FormComponents/BankDetails";
import axios from "axios";
import baseURL from "../../assets/config";
import { ThemeProvider } from "@mui/material";
import mainTheme from "../../assets/theme/mainTheme";

export default function FormFill() {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);

    const formData = new FormData();

    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("number", values.number);
    formData.append("email", values.email);
    formData.append("houseNo", values.houseNo);
    formData.append("district", values.district);
    formData.append("city", values.city);
    formData.append("pincode", values.pincode);
    formData.append("regDate", values.regDate);
    formData.append("regNo", values.regNo);
    formData.append("rtoDet", values.rtoDet);
    formData.append("vehicleType", values.vehicleType);
    formData.append("wheelerType", values.wheelerType);
    formData.append("batteryCapacity", values.batteryCapacity);
    formData.append("file1", values.file1);
    formData.append("file2", values.file2);
    formData.append("file3", values.file3);
    formData.append("file4", values.file4);
    formData.append("file5", values.file5);
    formData.append("file6", values.file6);
    formData.append("accountNo", values.accountNo);
    formData.append("holderName", values.holderName);
    formData.append("ifscCode", values.ifscCode);
    formData.append("bankName", values.bankName);
    formData.append("processingFees", values.processingFees);
    formData.append("branchName", values.branchName);
    formData.append("totalProcessingFees", values.totalProcessingFees);
    formData.append("gst", values.gst);
    formData.append("file7", values.file7);
    formData.append("file8", values.file8);
    formData.append("file9", values.file9);
    formData.append(
      "registrationNumberSearch",
      values.registrationNumberSearch
    );
    formData.append("aadhaarCardNumber", values.aadhaarCardNumber);
    formData.append("residenceProofNumber", values.residenceProofNumber);
    formData.append("drivingLicenseNumber", values.drivingLicenseNumber);
    formData.append("taxInvoiceNumber", values.taxInvoiceNumber);
    formData.append("vehicleRCNumber", values.vehicleRCNumber);
    formData.append("vehicleInsuranceNumber", values.vehicleInsuranceNumber);
    formData.append("acknowledgement", values.acknowledgement);

    axios
      .post(`${baseURL}/formFill`, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    alert("Do You Want to Submit the Form?");
    navigate("/");
  };
  return (
    <ThemeProvider theme={mainTheme}>
      <Box sx={{ width: "90%" }}>
        <FormikWizard
          initialValues={{
            firstName: "",
            lastName: "",
            number: "",
            email: "",
            houseNo: "",
            district: "",
            city: "",
            pincode: "",
            registrationNumberSearch: "",
            regDate: "",
            regNo: "",
            rtoDet: "",
            vehicleType: "",
            wheelerType: "",
            batteryCapacity: "",
            file1: "",
            file2: "",
            file3: "",
            file4: "",
            file5: "",
            file6: "",
            accountNo: "",
            holderName: "",
            ifscCode: "",
            bankName: "",
            processingFees: "",
            branchName: "",
            totalProcessingFees: "",
            gst: "",
            file7: "",
            file8: "",
            file9: "",
            aadhaarCardNumber: "",
            residenceProofNumber: "",
            drivingLicenseNumber: "",
            taxInvoiceNumber: "",
            vehicleRCNumber: "",
            vehicleInsuranceNumber: "",
            acknowledgement: false,
          }}
          onSubmit={handleSubmit}
          validateOnNext
          activeStepIndex={0}
          steps={[
            {
              component: VehicleDetails,
              validationSchema: Yup.object().shape({
                batteryCapacity: Yup.number().required(
                  "Battery Capacity is Required"
                ),
              }),
            },
            {
              component: RegistrationDetails,
              validationSchema: Yup.object().shape({
                regNo: Yup.string().required(
                  "Registration Number is Required !"
                ),
                regDate: Yup.date().required("Registration Date is Required"),
                rtoDet: Yup.string().required("RTO details is Required"),
                registrationNumberSearch: Yup.string().required("Required !"),
              }),
            },
            {
              component: PersonalDetails,
              validationSchema: Yup.object().shape({
                firstName: Yup.string().required("First name is Required !"),
                lastName: Yup.string().required("Last name is Required !"),
                number: Yup.number().required("Phone Number is Required !"),
                email: Yup.string()
                  .email("Please enter valid email")
                  .required("Email is Required !"),
              }),
            },

            {
              component: Address,
              validationSchema: Yup.object().shape({
                houseNo: Yup.string().required("House Number is required"),
                district: Yup.string().required("District is required"),
                city: Yup.string().required("City is required"),
                pincode: Yup.number().required("Pincode is required"),
              }),
            },

            {
              component: DocumentUploads,
              validationSchema: Yup.object().shape({
                aadhaarCardNumber: Yup.string().required(
                  "Aadhaar Card Number is Required"
                ),
                residenceProofNumber: Yup.string().required(
                  "Residence Proof Number is Required"
                ),
                drivingLicenceNumber: Yup.string().required(
                  "Driving Licence Number is Required"
                ),
                taxInvoiceNumber: Yup.string().required(
                  "Tax Invoice Number is Required"
                ),
                vehicleRCNumber: Yup.string().required(
                  "Vehicle RC Number is Required"
                ),
                vehicleInsuranceNumber: Yup.string().required(
                  "Vehicle Insurance Number is Required"
                ),

                file1: Yup.string().required("Aadhar Card is required"),
                file2: Yup.string().required("Residence Proof is required"),
                file3: Yup.string().required("Driving License is required"),
                file4: Yup.string().required("Vechile RC is required"),
                file5: Yup.string().required("Tax Invoice is required"),
                file6: Yup.string().required("Tax Invoice is required"),
              }),
            },
            {
              component: BankDetails,
              validationSchema: Yup.object().shape({
                accountNo: Yup.number().required("Account Number is Required"),
                holderName: Yup.string().required(
                  "Account Holder Name is Required"
                ),
                ifscCode: Yup.string()
                  .required("IFSC Code is required")
                  .matches(/^[A-Za-z]{4}\d{7}$/, "Invalid IFSC Code"),
                bankName: Yup.string().required("Bank Name is Required"),
                branchName: Yup.string().required("Branch Name is Required"),
                processingFees: Yup.number().required(
                  "Processing Fees is Required"
                ),
                totalProcessingFees: Yup.string().required(
                  "Total Processing Fees is Required"
                ),
                gst: Yup.string().required("GST is Required"),
                file7: Yup.string().required("Cancelled Cheque is required"),
                file8: Yup.string().required("Document 2 is required"),
                file9: Yup.string().required("Document 3 is required"),
              }),
            },
          ]}
        >
          {({
            currentStepIndex,
            renderComponent,
            handlePrev,
            handleNext,
            isNextDisabled,
            isPrevDisabled,
          }) => {
            return (
              <>
                <Box sx={{ width: "100%" }}>
                  <Stepper activeStep={currentStepIndex} alternativeLabel>
                    <Step completed={currentStepIndex > 0}>
                      <StepLabel>Vehicle Details</StepLabel>
                    </Step>
                    <Step completed={currentStepIndex > 1}>
                      <StepLabel>Registration Details</StepLabel>
                    </Step>

                    <Step completed={currentStepIndex > 2}>
                      <StepLabel>Personal Details</StepLabel>
                    </Step>
                    <Step completed={currentStepIndex > 3}>
                      <StepLabel>Address</StepLabel>
                    </Step>

                    <Step completed={currentStepIndex > 4}>
                      <StepLabel>Document Uploads</StepLabel>
                    </Step>
                    <Step completed={currentStepIndex > 5}>
                      <StepLabel>Bank Details</StepLabel>
                    </Step>
                  </Stepper>
                </Box>
                <Box mt={2}>{renderComponent()}</Box>
                <Box display="flex">
                  <Button disabled={isPrevDisabled} onClick={handlePrev}>
                    Previous
                  </Button>
                  <Button disabled={isNextDisabled} onClick={handleNext}>
                    {currentStepIndex === 5 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </>
            );
          }}
        </FormikWizard>
      </Box>
    </ThemeProvider>
  );
}
