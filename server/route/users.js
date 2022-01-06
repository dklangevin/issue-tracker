import express from 'express';

import { getUsers } from '../controller/users.js';

const router = express.Router();

router.get('/api/users', getUsers);

export default router;
