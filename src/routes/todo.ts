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
 *       createdAt:
 *         type: string
 *         description: 생성 시간
 *       updatedAt:
 *         type: string
 *         description: 업데이트 시간
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
 *         in: body
 *         type: string
 *         schema:
 *           type: object
 *           properties:
 *             text:
 *               type: string
 *     responses:
 *       200:
 *         description: Return New Todo
 *         schema:
 *           $ref: '#/definitions/Todo'
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
        res.status(201).json({...fullTodo.generatedMaps[0],"text":req.body.text});
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
 *         in: body
 *         type: string
 *         schema:
 *           type: object
 *           properties:
 *             text:
 *               type: string
 *             done:
 *               type: boolean
 *     responses:
 *       200:
 *         description: patch Todo success
 *         schema:
 *           $ref: '#/definitions/Todo'
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
 * /todo/{todoId}:
 *   delete:
 *     summary: Delte Todo
 *     tags: [Todo]
 *     parameters:
 *       - in:  path
 *         name: todoId
 *         description: The todo id
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: delete Todo success
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: The todo id
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
