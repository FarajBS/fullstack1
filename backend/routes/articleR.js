// Imports //
import express from 'express';
import { createA, getA, getAById, updateA, deleteA } from '../controllers/article.js';
import authenticateToken from '../middleware/token.js';
//== Imports ==//

const router = express.Router();

router.post('/articles', authenticateToken, createA);
router.get('/articles', getA);
router.get('/articles/:id', getAById);
router.patch('/articles/:id', authenticateToken, updateA);
router.delete('/articles/:id', authenticateToken, deleteA);

export default router;