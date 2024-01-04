import express from 'express';
// import morgan from 'morgan';
// import rateLimit from 'express-rate-limit';
// import helmet from 'helmet';
// import mongoSanitize from 'express-mongo-sanitize';
// import xss from 'xss-clean';
// import hpp from 'hpp';
// import cookieParser from 'cookie-parser';
// import compression from 'compression';
import cors from 'cors';
// import csrf from 'csurf';
import dotenv from 'dotenv';
// import AppError from '@utils/appError';
// import globalErrorHandler from '@controllers/errorController';
// import { loginLimiter } from '@utils/loginLimiter';
// import userRouter from '@routes/userRoutes';
// import typeRouter from '@routes/typeRoutes';
// import dashboardRouter from '@routes/dashboardRoutes';
// import dashboardNewRouter from '@routes/dashboardNewRoutes';
// import customerRouter from '@routes/customerRoutes';
// import environmentRouter from '@routes/environmentRoutes';
// import { Users } from '@/types/userType';
// import multer from 'multer';
dotenv.config({ path: './config.env' });

// declare global {
//   namespace Express {
//     interface Request {
//       user: Partial<Users>;
//       // file?: File | undefined;
//       file?: Multer.File | undefined;
//       requestTime: string;
//       rateLimit: { remaining: string };
//     }
//   }
// }

const app = express();


// 1) GLOBAL MIDDLEWARES

// Set security HTTP headers
// app.use(
//   helmet({
//     crossOriginResourcePolicy: false,
//   })
// );

// Implement CORS
const whitelist = ['http://localhost:3000', 'http://127.0.0.1:3000'];
// const corsOptions = {
//   credentials: true, // allow coockies
//   origin: (
//     origin: any,
//     callback: (arg0: AppError | null, arg1?: boolean | undefined) => any
//   ) => {
//     // (!origin) to allow Postman requests that comes with header: origin === undefined
//     const allowPostman = !origin && process.env.NODE_ENV === 'development';
//     return allowPostman || whitelist.indexOf(origin) !== -1
//       ? callback(null, true) // allow request
//       : callback(new AppError(`Origin: ${origin} Not allowed by CORS`, 403)); // deny request
//   },
// };

// app.use(cors(corsOptions));
app.options('*', cors());

// Serving static files example: http://localhost:5000/img/users/usrename.jpeg
// app.use(express.static(path.join(__dirname, '../public'))); // for npm run dev2
app.use(express.static('./public')); // for npm run dev (ts-node-dev)

// Development logging
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }
// Data sanitization against XSS
/* make sure this comes before any routes */
// app.use(xss());

// Limit requests from same API
// const limiter = rateLimit({
//   max: 500,
//   windowMs: 60 * 60 * 1000, // 1 hour
//   message: 'נשלחו יותר מדי בקשות מכתובת ה-IP שלך, נסה שוב בעוד שעה!',
// });
// app.use('/api', limiter);

// Limit the attempts to login to 5 times in an hour. Reset the counter  on successful login
// app.post('/api/users/login', loginLimiter);

// Body parser, reading data from body into req.body
// app.use(express.json({ limit: '100kb' }));
// app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// to use cookies
// app.use(cookieParser());

// ProtectAgainst csrf
// const csrfProtection = csrf({
//   cookie: true,
// });
// app.use(csrfProtection);

// Data sanitization against NoSQL query injection
// app.use(mongoSanitize());

// Prevent parameter pollution
// app.use(
//   hpp({
//     whitelist: [
//       // All Models
//       'id',
//       '_id',
//       'createdAt',
//       'updatedAt',
//       // User Model
//       'name',
//       'email',
//       'photo',
//       'role',
//       'password',
//       'passwordConfirm',
//       'passwordChangedAt',
//       'passwordResetToken',
//       'passwordResetExpires',
//       'active',
//       // Customer Model
//       'customerTypeId',
//       'shualCityId',
//       'lamas',
//       'isTraining',
//       'isEnabled',
//       'logo',
//       'location',
//       // Dashboard Model
//       'order',
//       'name',
//       'url',
//       'includeShualCityId',
//       'excludeShualCityId',
//       'customerTypeId',
//       // Type Model
//       'name',
//     ],
//   })
// );

// compress requests size
// app.use(compression());

// Test middleware
// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

// 2) ROUTES
// app.use('/api/users', userRouter);
// app.use('/api/types', typeRouter);
// app.use('/api/dashboards', dashboardRouter);
// app.use('/api/dashboardsNew', multer().none(), dashboardNewRouter);
// app.use('/api/environments', environmentRouter);
// app.use('/api/customers', customerRouter);

// app.all('*', (req, res, next) => {
//   next(new AppError(`הכתובת ${req.originalUrl} לא קיימת בשרת!`, 404));
// });

// // all new AppError errors will catch in this middelware and will be handled in errorController.js
// app.use(globalErrorHandler);

export default app;
