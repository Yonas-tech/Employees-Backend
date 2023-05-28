const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

here is the schema I have
// Define the Address schema
const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    country: String
  });

// employee schema
const employeeSchema = new mongoose.Schema({
    firstName: {type: String, required:true}, 
    lastName: {type: String, required:true},
    position: {type: String, required:true},
    department: {type: String, required:true},
    location: {
        type: String,
        enum: ['New York', 'Boston', 'Dublin', 'London', 'Tokyo']
      },
    phone: {type: String, required:true},
    SMS: {type: String},
    Email: {type: String, required:true},
    isOnLeave: {type: Boolean, default: false},
    imageId: Number,
    hireDate: {
        type: Date,
        default: Date.now
      },
    dob: Date,
    address: addressSchema,
    ssn: Number
},

{timestamps:true}
)


const Employees = mongoose.model("Employees", employeeSchema)

module.exports = Employees; 
