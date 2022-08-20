const express = require('express')
const { 
   getUsers, 
   getUser, 
   createUser, 
   updateUser, 
   deleteUser } = require('../controllers/users')

const router = express.Router()

router.route('/').get(getUsers).post(createUser)

router.route('/:id').put(updateUser).delete(deleteUser).get(getUser)


module.exports = router;
