import express from 'express'
const router = express.Router();
import {isLoggedIn} from '../middlewares'

import Todo from '../entities/Todo'

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
router.post('/', isLoggedIn, async(req, res, next) => {
    try {
        const fullTodo = await Todo.insert({
          text:req.body.text,
        })
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
router.patch('/', isLoggedIn, async(req, res, next) => {
  try {
      //await Todo.update({
        
      //});
      res.status(200).json({ TodoId: parseInt(req.params.todoId, 10) });
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
router.delete('/', isLoggedIn, async(req, res, next) => {
    try {
        //await Todo.delete({
        
        //});
        res.status(200).json({ TodoId: parseInt(req.params.todoId, 10) });
      } catch (error) {
        console.error(error);
        next(error);
      }
})

export default router;
