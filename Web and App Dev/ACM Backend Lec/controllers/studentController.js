const student = require("../models/studentModel")

const addStudent  = async (req, res) =>{
    try {
        const singleStudent = await student.create(req.body); //2 sec
        res.status(200).json(singleStudent);
    } catch (error) {
        console.log(error)
    }
}

const getStudents = async (req,res) => {
    try {
        const students = await student.find({});
        res.status(200).json(students);
    } catch (error) {
        console.log(error)
    }
}

const getSingleStudent = async (req,res) => {
    try {
        const id = req.params.id;
        const singleStudent = await student.findById(id);
        res.status(200).json(singleStudent);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getSingleStudent , getStudents, addStudent}
