const express = require("express")
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/api/students",studentController.getStudents);
router.get("/api/students/:id",studentController.getSingleStudent);
router.post("/api/students",studentController.addStudent);

module.exports = router

