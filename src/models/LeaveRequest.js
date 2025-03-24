const db = require("../config/db");

const LeaveRequest = {
  create: (employee_id, start_date, end_date, reason, callback) => {
    const sql = "INSERT INTO LeaveRequests (employee_id, start_date, end_date, reason) VALUES (?, ?, ?, ?)";
    db.query(sql, [employee_id, start_date, end_date, reason], callback);
  },

  getAll: (callback) => {
    db.query("SELECT * FROM LeaveRequests", callback);
  },

  updateStatus: (id, status, callback) => {
    const sql = "UPDATE LeaveRequests SET status = ? WHERE id = ?";
    db.query(sql, [status, id], callback);
  },

  getByEmployee: (employee_id, callback) => {
    const sql = "SELECT * FROM LeaveRequests WHERE employee_id = ?";
    db.query(sql, [employee_id], callback);
  },
};

module.exports = LeaveRequest;
