const express = require("express");
const { createEmployee } = require("../controller/EmployeeCtrl");
const EmployeeRouter = express.Router();



EmployeeRouter.post("/register", createEmployee);


module.exports = {
    EmployeeRouter
}