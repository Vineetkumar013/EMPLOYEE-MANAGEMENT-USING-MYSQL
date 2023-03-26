
const jwt = require("jsonwebtoken");
const { Employee } = require("../model/EmployeModel");


const authMiddleware = async (req, res, next) => {
  try {
    let token;
    if (req?.headers?.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded?.id);
        if (user) {
          req.user = user;
          next();
        } else {
          throw new Error('User not found');
        }
      }
    } else {
      throw new Error('No token attached to header');
    }
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

const isAdmin = async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await Employee.findOne({ where: { email } });
  if (!adminUser) {
    throw new Error('User not found');
  } else if (adminUser.role !== 'admin') {
    throw new Error('You are not an admin');
  } else {
    next();
  }
};

module.exports = {
    authMiddleware,
    isAdmin
}