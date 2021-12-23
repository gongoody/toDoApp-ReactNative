import { Router } from 'express';
import {createTask, deleteTask, getTask, getTaskCount, getTasks, updateTask} from '../controllers/tasks'

const router = Router()

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 */

router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get the number of tasks
 */

router.get('/tasks/count', getTaskCount)

/**
 * @swagger
 * /tasks/id:
 *  get:
 *      summary: Get a single task by ID
 */

router.get('/tasks/:id', getTask)

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Create a new task
 */

router.post('/tasks', createTask)

/**
 * @swagger
 * /tasks/id:
 *  delete:
 *      summary: Delete a single task by ID
 */

router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /tasks/id:
 *  put:
 *      summary: Edit a single task by ID
 */

router.put('/tasks/:id', updateTask)

export default router