// const { Sequelize, DataTypes } = require("sequelize");
// const { sequelize } = require("../config/DBConnect");
// const { Employee } = require("./EmployeModel");

// const Leave = sequelize.define('Leave', {
//   leave_type: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   start_date: {
//     type: DataTypes.DATEONLY,
//     allowNull: false,
//   },
//   end_date: {
//     type: DataTypes.DATEONLY,
//     allowNull: false,
//   },
//   reason: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.ENUM('Pending', 'Approved', 'Rejected', 'Cancelled'),
//     allowNull: false,
//     defaultValue: 'Pending',
//   },
// });

// Leave.belongsTo(Employee, { foreignKey: 'employee_id' });


// sequelize
//   .sync()
//   .then(() => {
//     console.log("UserEmployee created successfully");
//   })
//   .catch((err) => {
//     console.log("UserEmployee created failed: " + err.message);
//   });

// module.exports = {
//   Leave,
// };
