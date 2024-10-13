// Imports //
import express from 'express';
import { signUp, logIn, userGet } from '../controllers/user.js';
import authenticateToken from '../middleware/token.js';
//== Imports ==//

const router = express.Router();

router.post('/register', signUp);
router.post('/login', logIn);
router.get('/:id', authenticateToken, userGet);

export default router;