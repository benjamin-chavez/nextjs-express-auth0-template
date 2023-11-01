// server/src/routes/index.ts

import { Router } from 'express';
import asyncHandler from 'express-async-handler';

const router = Router();

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    res.status(200).send('Server Running...');
  })
);

router.get(
  '/private-route',
  asyncHandler(async (req, res, next) => {
    res.status(200).send({ message: 'This is a private route' });
  })
);

export default router;
