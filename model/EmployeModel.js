const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/DBConnect");
const bcrypt = require("bcrypt")

const Employee = sequelize.define("Employee", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
    },
    role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  jobtitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hiredate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  address: {
    type: Sequelize.JSON,
    allowNull: false,
  },
});


Employee.beforeSave(async function (employee) {
  const salt = await bcrypt.genSaltSync(10);
  employee.password = await bcrypt.hash(employee.password, salt);
});

Employee.prototype.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

sequelize
  .sync()
  .then(() => {
    console.log("Employee created successfully");
  })
  .catch((err) => {
    console.log("Employee created failed: " + err.message);
  });

module.exports = {
  Employee,
};
