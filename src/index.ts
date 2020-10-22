import express from 'express'
const app = express();

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import session from 'express-session'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import hpp from 'hpp'
import helmet from 'helmet'
import cors from 'cors'
import passport from 'passport'
import passportConfig from './passport';
import { createConnection } from 'typeorm';
import connectRedis from 'connect-redis'
const RedisStore = connectRedis(session);
import redis from 'redis'
import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../.env' });

passportConfig();

const connectionOptions = require('./ormconfig');

export const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  logError: true,
});


createConnection(connectionOptions)
  .then(() => {
    console.log('MySQL 연결 성공');
  })
  .catch((err: any) => {
    console.log('MySQL 연결 오류 ' + err);
  });


const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    info: { // API informations (required)
      title: 'Utopier TodoApp API', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'TodoApp API' // Description (optional)
    },
    host: 'localhost:2025', // Host (optional)
    basePath: '/', // Base path (optional)
    servers:[
      {
        url:"http://localhost:2025"
      }
    ],
    schemes:['http','https'],
  },
  // Path to the API docs
  apis: ['./routes/*.*']
};

const swaggerSpec = swaggerJSDoc(options);

import userRouter from './routes/user'
import todosRouter from './routes/todos'
import todoRouter from './routes/todo'

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
    app.use(hpp());
    app.use(helmet({ contentSecurityPolicy: false }));
    app.use(cors({
      //origin: 'http://nodebird.com',
      credentials: true,
    }));
  } else {
    app.use(morgan('dev'));
    app.use(cors({
      origin: true,
      credentials: true,
    }));
  }
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
  name:"sessionId",
  store: new RedisStore({client: redisClient}),
  cookie: {
    httpOnly: true,
    secure: false,
    // domain: process.env.NODE_ENV === 'production' && '.nodebird.com'
  },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/todos', todosRouter);
app.use('/todo', todoRouter);
app.use('/user', userRouter);


app.listen(2025, () => console.log('todoapp server start'));
