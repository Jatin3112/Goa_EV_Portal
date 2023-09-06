const {db,userTableName} = require("../config/mysqlConnection");
const fs = require("fs");
const { generateApplicationNumber } = require("./applicationNumber");

const tableName = userTableName;

const form = (req, res, next) => {
  // Access the uploaded files

  const file1 = req.files.file1[0];
  const file2 = req.files.file2[0];
  const file3 = req.files.file3[0];
  const file4 = req.files.file4[0];
  const file5 = req.files.file5[0];
  const file6 = req.files.file6[0];
  const file7 = req.files.file7[0];
  const file8 = req.files.file8[0];
  const file9 = req.files.file9[0];

  if (
    !file1 ||
    file1.mimetype !== "application/pdf" ||
    !file2 ||
    file2.mimetype !== "application/pdf" ||
    !file3 ||
    file3.mimetype !== "application/pdf" ||
    !file4 ||
    file4.mimetype !== "application/pdf" ||
    !file5 ||
    file5.mimetype !== "application/pdf" ||
    !file6 ||
    file6.mimetype !== "application/pdf" ||
    !file7 ||
    file7.mimetype !== "application/pdf" ||
    !file8 ||
    file8.mimetype !== "application/pdf" ||
    !file9 ||
    file9.mimetype !== "application/pdf"
  ) {
    if (file1) {
      fs.unlinkSync(file1.path);
    }
    if (file2) {
      fs.unlinkSync(file2.path);
    }
    if (file3) {
      fs.unlinkSync(file3.path);
    }
    if (file4) {
      fs.unlinkSync(file4.path);
    }
    if (file5) {
      fs.unlinkSync(file5.path);
    }
    if (file6) {
      fs.unlinkSync(file6.path);
    }
    if (file7) {
      fs.unlinkSync(file7.path);
    }
    if (file8) {
      fs.unlinkSync(file8.path);
    }
    if (file8) {
      fs.unlinkSync(file8.path);
    }
    res.status(400).json({ error: "Only pdf files are allowed" });
    return;
  }

  // Access other form data from req.body

  const {
    firstName,
    lastName,
    number,
    email,
    houseNo,
    district,
    city,
    pincode,
    regDate,
    regNo,
    rtoDet,
    vehicleType,
    wheelerType,
    batteryCapacity,
    accountNo,
    holderName,
    ifscCode,
    bankName,
    processingFees,
    branchName,
    totalProcessingFees,
    gst,
    registrationNumberSearch,
    aadhaarCardNumber,
    residenceProofNumber,
    drivingLicenseNumber,
    taxInvoiceNumber,
    vehicleRCNumber,
    vehicleInsuranceNumber,
    acknowledgement,
  } = req.body;

  const applicationNumber = generateApplicationNumber();
  // Insert the data into the database
  const sql = `INSERT INTO ${tableName}(Application_No,firstName,lastName,number,email,houseNumber,district,city,pincode,registrationDate,registrationNumber,rtoDetails,vehicleType,wheelerType,batteryCapacity,aadhaarCard,residenceProof,drivingLicence,vehicleRC,vehicleInsurance,taxInvoice,document1,document2,document3,accountNumber,accountHolderName,ifscCode,bankName,processingFees,branchName,totalProcessingFees,gst,registrationNumberSearch,aadhaarCardNumber,residenceProofNumber,drivingLicenceNumber,taxInvoiceNumber,vehicleRCNumber,vehicleInsuranceNumber,acknowledgement,folderName) VALUES ?`;
  // console.log(req.body);

  const values = [
    [
      applicationNumber,
      firstName,
      lastName,
      number,
      email,
      houseNo,
      district,
      city,
      pincode,
      regDate,
      regNo,
      rtoDet,
      vehicleType,
      wheelerType,
      batteryCapacity,
      file1.filename,
      file2.filename,
      file3.filename,
      file4.filename,
      file5.filename,
      file6.filename,
      file7.filename,
      file8.filename,
      file9.filename,
      accountNo,
      holderName,
      ifscCode,
      bankName,
      processingFees,
      branchName,
      totalProcessingFees,
      gst,
      registrationNumberSearch,
      aadhaarCardNumber,
      residenceProofNumber,
      drivingLicenseNumber,
      taxInvoiceNumber,
      vehicleRCNumber,
      vehicleInsuranceNumber,
      acknowledgement,
      req.uploadFolder.slice(14),
    ],
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error(err);
      // Delete the uploaded files
      if (file1) {
        fs.unlinkSync(file1.path);
      }
      if (file2) {
        fs.unlinkSync(file2.path);
      }
      if (file3) {
        fs.unlinkSync(file3.path);
      }
      if (file4) {
        fs.unlinkSync(file4.path);
      }
      if (file5) {
        fs.unlinkSync(file5.path);
      }
      if (file6) {
        fs.unlinkSync(file6.path);
      }
      if (file7) {
        fs.unlinkSync(file7.path);
      }
      if (file8) {
        fs.unlinkSync(file8.path);
      }
      if (file9) {
        fs.unlinkSync(file9.path);
      }
      res.status(500).json({ error: "An error occurred while inserting data" });
    } else {
      res.json(data);
    }
  });
};

module.exports = { form };
