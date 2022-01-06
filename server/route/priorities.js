import express from 'express';

import { getPriorities } from '../controller/priorities.js';

const router = express.Router();

router.get('/api/priorities', getPriorities);

export default router;
