const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 5000

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const applicationCardData = require("./src/routes/application");
const adminHomePage = require("./src/routes/adminHome");
const trackApplication = require("./src/routes/trackApplication");
const formFill = require("./src/routes/formFill");
const adminLogin = require("./src/routes/adminLogin");
const userLogin = require("./src/routes/userLogin");
const userDetails = require("./src/routes/userDetails");
const editForm = require("./src/routes/editForm");
const adminManagement = require("./src/routes/adminManagement")

app.use("/applications", applicationCardData);

app.use("/admin", adminHomePage);

app.use("/", trackApplication);

app.use("/", formFill);

app.use("/", adminLogin);

app.use("/", userLogin);

app.use("/", userDetails);

app.use("/", editForm);

app.use("/", adminManagement);

app.listen(PORT, () => {
  console.log(`Server in listening on PORT ${PORT}`);
});
