const db = require("../config/db");

const Employee = {
  create: (name, email, department, callback) => {
    const sql = "INSERT INTO Employees (name, email, department) VALUES (?, ?, ?)";
    db.query(sql, [name, email, department], callback);
  },

  getAll: (callback) => {
    db.query("SELECT * FROM Employees", callback);
  },
};

module.exports = Employee;
