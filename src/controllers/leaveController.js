const LeaveRequest = require("../models/LeaveRequest");

// Submit Leave Request
exports.submitLeave = (req, res) => {
  const { employee_id, start_date, end_date, reason } = req.body;
  LeaveRequest.create(employee_id, start_date, end_date, reason, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Leave request submitted", id: result.insertId });
  });
};

// Get All Leave Requests
exports.getAllLeaves = (req, res) => {
  LeaveRequest.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Approve/Reject Leave
exports.updateLeaveStatus = (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  if (!["approved", "rejected"].includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }
  LeaveRequest.updateStatus(id, status, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Leave status updated" });
  });
};

//  Get Leave Requests by Employee
exports.getLeavesByEmployee = (req, res) => {
  const { employee_id } = req.params;
  LeaveRequest.getByEmployee(employee_id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
