import express from 'express'
const router = express.Router();
import {isLoggedIn} from '../middlewares'

import Todo from '../entities/Todo'
import User from '../entities/User'
/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: Todo management
 * definitions:
 *   Todo:
 *     type: object
 *     required:
 *       - text
 *     properties:
 *       _id:
 *         type: string
 *         description: ObjectID
 *       text:
 *         type: string
 *         description: 할일 내용
 *       done:
 *         type: boolean
 *         description: 완료 여부
 */

/**
 * @swagger
 * /todo:
 *   post:
 *     summary: Create Todo
 *     tags: [Todo]
 *     parameters:
 *       - name: text
 *         description: New Todo Text
 *         in:  body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return New Todo
 *         schema:
 *           type: object
 *           properties:
 *             type: object
 *             newTodo:
 *               $ref: '#/definitions/Todo'
 */
router.post('/', isLoggedIn, async(req:any, res, next) => {
    try {
        const fullTodo = await Todo.insert({
          text:req.body.text,
        })
        await User.createQueryBuilder()
          .relation(User, 'todos')
          .of(req.user.id)
          .add(fullTodo.identifiers[0].id)
        res.status(201).json(fullTodo);
      } catch (error) {
        console.error(error);
        next(error);
      }
})

/**
 * @swagger
 * /todo:
 *   patch:
 *     summary: Update Todo Done
 *     tags: [Todo]
 *     parameters:
 *       - name: text
 *         description: update todo text
 *         in:  body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: patch Todo success
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: object
 *               items:
 *                 $ref: '#/definitions/Todo'
 */
router.patch('/:todoId', isLoggedIn, async(req:any, res, next) => {
  try {
      await Todo.update(
        {id: req.params.todoId},
        {
          text: req.body.text,
          done: req.body.done
        }
      );
      res.status(200).json({ 
        id: req.params.todoId,
        text: req.body.text,
        done: req.body.done,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
})

/**
 * @swagger
 * /todo:
 *   delete:
 *     summary: Delte Todo
 *     tags: [Todo]
 *     parameters:
 *       - name: id
 *         description: delete todo id
 *         in:  query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: delete Todo success
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: object
 *               items:
 *                 $ref: '#/definitions/Todo'
 */
router.delete('/:todoId', isLoggedIn, async(req:any, res:any, next) => {
    try {
      const todo = await Todo.findOne({
        where: { id: req.params.todoId, user: { id: req.user.id } },
      });
      if (!todo) {
        return res.status(403).send('Todo가 존재하지 않습니다.');
      }
      await Todo.createQueryBuilder()
        .relation(Todo, 'user')
        .of(todo.id)
        .set(null);
      await Todo.delete({ id: todo.id });
        res.status(200).json({ TodoId: req.params.todoId });
      } catch (error) {
        console.error(error);
        next(error);
      }
})

export default router;
