import path from 'path';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';

import usersRouter from './pages/api/users';
import indexRouter from './pages/index';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
