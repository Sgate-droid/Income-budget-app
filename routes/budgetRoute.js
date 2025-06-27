import express from "express";

import { calculateBudget } from '../controller/budgetController.js';

const router = express.Router();

router.post('/calculate', calculateBudget);

export default router;
