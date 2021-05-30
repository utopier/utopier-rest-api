import express, { NextFunction} from 'express'
const router = express.Router()
import {isNotLoggedIn, isLoggedIn} from '../middlewares'
import passport from 'passport'

import User from '../entities/User'
import bcrypt from 'bcrypt'

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - username
 *     properties:
 *       id:
 *         type: string
 *         description: ObjectID
 *       username:
 *         type: string
 *         description: 유저 이름
 *       password:
 *         type: string
 *         description: 비밀번호
 *   NewUser:
 *     type: object
 *     required:
 *       - username
 *     properties:
 *       username:
 *         type: string
 *         description: 유저 이름
 *       password:
 *         type: string
 *         description: 비밀번호
 *   ResponseUser:
 *     type: object
 *     required:
 *       - username
 *     properties:
 *       id: 
 *         type: string
 *         description: ObjectID
 *       username:
 *         type: string
 *         description: 유저 이름
 */


 
/**
 * @swagger
 * /user:
 *   post:
 *     summary: Sign Up
 *     tags: [User]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewUser'
 *     responses:
 *       '200':
 *         description: Response User
 *         schema:
 *           $ref: '#/definitions/ResponseUser'  
 */
router.post('/', isNotLoggedIn, async(req: any, res:any, next:NextFunction) => {
  try {
        const exUser = await User.findOne({
          where: {
            userName: req.body.userName,
          }
        });
        if (exUser) {
          return res.status(403).send('이미 사용 중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.insert({
          userName: req.body.userName,
          password: hashedPassword,
        });
        res.status(201).send('ok');
      } catch (error) {
        console.error(error);
        next(error); // status 500
      }
})

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login
 *     tags: [User]
 *     parameters:
 *       - name: user
 *         description: User object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewUser'
 *     responses:
 *       '200':
 *         description: Response User
 *         schema:
 *           $ref: '#/definitions/ResponseUser'  
 */
router.post('/login', isNotLoggedIn, async(req:any,res,next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
          console.error(err);
          return next(err);
        }
        if (info) {
          return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
          if (loginErr) {
            console.error(loginErr);
            return next(loginErr);
          }
          const fullUserWithoutPassword = await User.find({
            select: ["id","userName"],
            where:{userName: req.body.userName},
          })
          return res.status(200).json(fullUserWithoutPassword);
        });
      })(req, res, next);
})

/**
 * @swagger
 * /user/logout:
 *   post:
 *     summary: Logout
 *     tags: [User]
 *     responses:
 *       200:
 *         description: OK
 */
router.post('/logout', isLoggedIn, (req:any, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});


export default router