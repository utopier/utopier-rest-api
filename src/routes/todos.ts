import express from 'express'
const router = express.Router();
import Todo from '../entities/Todo'
import {isLoggedIn} from '../middlewares'

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
 *           type: arry
 *           $ref: '#/definitions/Todo'
 */
router.get('/', isLoggedIn, async(req:any, res, next) => {
  console.log(req.user.id)
  try {
        const todos = await Todo.find({
          where:{user:{id:req.user.id}}
        });
        res.status(200).json(todos);
      } catch (error) {
        console.error(error);
        next(error);
      }
})

export default router;