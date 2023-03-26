const { genratejwtToken } = require("../middleware/jwtToken");
const { genrateRefreshToken } = require("../middleware/RefreshToken");
const { Employee } = require("../model/EmployeModel");

/////////////////////////////////// CREATE EMPLOYEE //////////////////////////////////

const createEmployee = async (req, res) => {
    try {
    
    const { firstname, lastname, email, phone_number, password } = req.body;
    const findEmployee = await Employee.findOne({ where: { email } });
    if (!findEmployee) {
const newEmployee = await Employee.create({
  firstname,
  lastname,
  email,
  phone_number,
  password,
  role: 'employee',
  department: 'unknown',
  jobtitle: 'unknown',
  hire_date: new Date(),
  salary: 0.0,
  address: 'unknown'
});
      res.json({ message: "User created successfully"});
    } else {
      res.json({ message: "User already exists" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Error" });
  }
};

/////////////////////////////////// LOGIN EMPLOYEE //////////////////////////////////

module.exports = {
  createEmployee,
};
// query = "select firstname,lastname,email, password,phone_number,department,jobtitle,hiredate,salary,address from Employee where email =?"