const jwt = require("jsonwebtoken");

const genrateRefreshToken = (id) => {
    return jwt.sign({ id }, "Refreshemployees", { expiresIn: "3d" });
}


module.exports = {
    genrateRefreshToken 
}