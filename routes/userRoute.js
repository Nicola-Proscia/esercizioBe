
//route
import express from 'express'  

import { getAllUsers, getUserRole , createUser, modUser } from '../controllers/userController.js'

const router = express.Router()
//post 
router.post('/create', createUser)
// put 
router.put('/create/:id', modUser)
//get
router.get('/', getAllUsers)
router.get('/getrole', getUserRole) //metodo

export default router