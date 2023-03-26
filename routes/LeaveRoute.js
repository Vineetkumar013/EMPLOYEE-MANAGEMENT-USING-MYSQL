// const express = require("express");
// const { Leave } = require("../model/LeaveModel");
// const leaveRouter = express.Router();

// // Leave application API
// leaveRouter.post('/leave', async (req, res) => {
//   try {
//     const { employee_id, leave_type, start_date, end_date, reason } = req.body;
//     const leave = await Leave.create({
//       employee_id,
//       leave_type,
//       start_date,
//       end_date,
//       reason,
//       status: 'Pending'
//     });
//     res.status(201).json(leave);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Leave approval API
// leaveRouter.patch('/leave/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status, approved_by } = req.body;
//     const leave = await Leave.findOne({ where: { id } });
//     if (!leave) {
//       res.status(404).json({ message: 'Leave not found' });
//     } else {
//       leave.status = status;
//       leave.approved_by = approved_by;
//       await leave.save();
//       res.json(leave);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Cancel leave request API
// leaveRouter.delete('/leave/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const leave = await Leave.findOne({ where: { id } });
//     if (!leave) {
//       res.status(404).json({ message: 'Leave not found' });
//     } else {
//       await leave.destroy();
//       res.json({ message: 'Leave cancelled successfully' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Employee leave status dashboard API
// leaveRouter.get('/leave/status', async (req, res) => {
//     try {
//         const { leave_type } = req.query;
//         const where = leave_type ? { leave_type } : {};
//         const leaves = await Leave.findAll({
//             where,
//             attributes: ['start_date', 'end_date'],
//             include: {
//                 model: Employee,
//                 attributes: ['first_name', 'last_name', 'department']
//             }
//         });
//         const employeesOnLeave = new Map();
//         leaves.forEach(leave => {
//             const startDate = new Date(leave.start_date);
//             const endDate = new Date(leave.end_date);
//             const diffTime = Math.abs(endDate - startDate);
//             const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//             const { first_name, last_name, department } = leave.Employee;
//             for (let i = 0; i < diffDays; i++) {
//                 const date = new Date(startDate);
//                 date.setDate(startDate.getDate() + i);
//                 const dateString = date.toISOString().substring(0, 10);
//                 const key = `${dateString}_${department}`;
//                 if (employeesOnLeave.has(key)) {
//                     employeesOnLeave.set(key, employeesOnLeave.get(key) + 1);
//                 } else {
//                     employeesOnLeave.set(key, 1);
//                 }
//             }
//         });
//         res.json(Array.from(employeesOnLeave.entries()));
//     } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//     }
// })

// module.exports = {
//   leaveRouter
// }