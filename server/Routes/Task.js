import express from 'express';
import {CreateTask, getTasks, UpdateTask, getTask} from '../Controllers/Task.js'
import { verifyToken } from '../middleware/Verify.js';
const Router = express.Router()

Router.post('/create', verifyToken, CreateTask)
Router.put('/:id', verifyToken, UpdateTask)
Router.get('/:id', verifyToken, getTask)
Router.get('/', verifyToken, getTasks)

export default Router