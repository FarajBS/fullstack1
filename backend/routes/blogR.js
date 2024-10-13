// Imports //
import express from 'express';
import { create, getB, getById, update, deleteB } from '../controllers/blog.js';
import authenticateToken from '../middleware/token.js';
//== Imports ==//

const router = express.Router();

router.post('/blogs', authenticateToken, create);
router.get('/blogs', getB);
router.get('/blogs/:id', getById);
router.patch('/blogs/:id', authenticateToken, update);
router.delete('/blogs/:id', authenticateToken, deleteB);

export default router;