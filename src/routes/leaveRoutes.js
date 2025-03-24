const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/leaveController");

router.post("/leave", leaveController.submitLeave);
router.get("/leave", leaveController.getAllLeaves);
router.put("/leave/:id", leaveController.updateLeaveStatus);
router.get("/leave/employee/:employee_id", leaveController.getLeavesByEmployee);

module.exports = router;
