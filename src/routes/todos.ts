import express from 'express'
const router = express.Router();
import Todo from '../entities/Todo'
//import User from '../entities/User'

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Todos management
 */

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Returns Todo list
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: todo list
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Todo'
 */
router.get('/', async(req, res, next) => {
    try {
        const todos = await Todo.find({
        
        });
        res.status(200).json(todos);
      } catch (error) {
        console.error(error);
        next(error);
      }
})

export default router;