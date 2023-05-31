const User = require('../../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



// INDEX: Get all users
const getAllUsers = async () => {
  try {
    const foundUsers = await User.find().select('-password').lean()
    if (!foundUsers) {
      return res.status(400).json({ message: 'No users found' })
    }
    res.json(foundUsers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

// CREATE a new user
async function createNewUser(req, res) {
  try {
    //check if an account aleady exist with the email
    const duplicate = await User.findOne({email: req.body.email}).lean().exec()
    if (duplicate) {
      return res.status(409).json({message: 'Duplicate email'})  // 409 - conflict
    }
    // Add the user to the database
    const user = await User.create(req.body)

    if(user){
      res.status(201).json({message:`New user ${user._id} created`})
    } 
    // token will be a string
    const token = createJWT(user)
    res.json(token)
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err.message)
  }
}

// UPDATE (edit it ????????????)
async function updateUser(req, res) {
  const { id } = req.params
    // const { firstName, lastName, position, department, location, phone, Email, isOnLeave } = req.body
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        req.body,
        { new: true }  // The {new: true} option ensures that the updated User object is returned in the response.
      )
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' })
      }
      const token = createJWT(updatedUser)
      // { message: 'User updated successfully' }
      res.json(token)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server Error' })
    }
}

// DELETE (edit it ????????????)
async function deleteUser(req, res) {

    const { id } = req.params
    
    try {
      const deletedUser = await User.findByIdAndDelete(id)
      
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' })
      }
      
      res.json({ message: `User ${deletedUser.id} deleted successfully` })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server Error' })
    }

}

// SHOW
async function showUser(req, res) {
  const { id } = req.params
  // const { firstName, lastName, position, department, location, phone, Email, isOnLeave } = req.body
  
  try {
    const foundUser = await User.findById(id)
  
    if (!foundUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.json(foundUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

// LogIN

async function loginUser(req, res) {
  try {
    // Query our database to find a user with the email provided
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Error()
    // if we found the email, compare password
    // 1st argument from the credentials that the user typed in
    // 2nd argument what's stored in the database
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) throw new Error()
    // if everything checks out, create token, login!
    res.json(createJWT(user))
  } catch {
    res.status(400).json('Bad Credentials')
  }
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}

module.exports = {
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUser,
  loginUser,
  showUser
}
