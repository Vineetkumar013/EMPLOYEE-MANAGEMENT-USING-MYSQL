const express = require("express");
// require("dotenv").config();
const Sequelize = require('sequelize');
const { sequelize } = require("./config/DBConnect");
const app = express();
app.use(express.json());



const { EmployeeRouter } = require("./routes/EmployeeRoute");
// const { leaveRouter } = require("./routes/LeaveRoute");

// app.use("/leave", leaveRouter);
app.use("/employee", EmployeeRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server run on ${PORT}`);
})