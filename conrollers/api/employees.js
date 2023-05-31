const express = require('express')
var router = express.Router()
const Employee = require('../../models/employees')


// Index
// GET route to fetch all employees
const getAllEmployees = async (req, res) => {
    try {
      const foundEmployees = await Employee.find().lean()
      
      // message if no usser is found

      res.json(foundEmployees)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server Error' })
    }
  }

// New - Will be handled by React application

// DELETE route to delete an employee by ID
const deleteEmployee =  async (req, res) => {
    const { id } = req.params
    
    try {
      const deletedEmployee = await Employee.findByIdAndDelete(id)
      
      if (!deletedEmployee) {
        return res.status(404).json({ message: 'Employee not found' })
      }
      
      res.json({ message: 'Employee deleted successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server Error' })
    }
  }

// UPDATE route to update an employee by ID
const updateEmployee =  async (req, res) => {
    const { id } = req.params
    // const { firstName, lastName, position, department, location, phone, Email, isOnLeave } = req.body
    
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        req.body,
        { new: true }  // The {new: true} option ensures that the updated employee object is returned in the response.
      )
      
      if (!updatedEmployee) {
        return res.status(404).json({ message: 'Employee not found' })
      }
      // { message: 'Employee updated successfully' }
      res.json(updatedEmployee)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server Error' })
    }
  }

// CREATE route to create a new employee
const createNewEmployee =  async (req, res) => {
    //const { firstName, lastName, position, department, location, phone, Email, isOnLeave } = req.body
    
    try {
      const newEmployee = new Employee(req.body)
      
      const savedEmployee = await newEmployee.save()
      
      res.json(savedEmployee)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server Error' })
    }
  }
  
// Edit - Will be handled by React application

// Show 
const showEmployee =  async (req, res) => {
    const { id } = req.params
    // const { firstName, lastName, position, department, location, phone, Email, isOnLeave } = req.body
    
    try {
      const foundEmployee = await Employee.findById(id)
    
      if (!foundEmployee) {
        return res.status(404).json({ message: 'Employee not found' })
      }

      res.json(foundEmployee)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server Error' })
    }
  }


module.exports = {
  getAllEmployees,
  deleteEmployee,
  updateEmployee,
  createNewEmployee,
  showEmployee
}