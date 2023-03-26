const Sequelize = require("sequelize");


const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'employeemanagement',
  username: 'root',
  password: 'Vineet@@013',
});


sequelize
  .authenticate()
  .then(() => {
    console.log("Database created successfully.");
  })
  .catch((err) => {
    console.error("Database creation failed", err);
  });
module.exports = {
  sequelize,
};
