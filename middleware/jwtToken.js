
const jwt = require("jsonwebtoken");

const genratejwtToken = (id) => {
    return jwt.sign({ id }, "employees", { expiresIn: "1d" });
}


module.exports = {
    genratejwtToken
}