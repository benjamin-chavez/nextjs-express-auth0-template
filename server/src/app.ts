// server/src/app.ts

import cookieParser from 'cookie-parser';
import express from 'express';
import flash from 'express-flash';
import morgan from 'morgan';
import {
  generalErrorHandler,
  notFoundHandler,
} from './middleware/errorMiddleware';
import listEndpoints from 'express-list-endpoints';
import routes from './routes/index';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());

app.use('/api', routes);
app.get('/api/routes', (req, res) => {
  res.status(200).send(listEndpoints(app));
});

app.use(notFoundHandler);
app.use(generalErrorHandler);

export default app;
