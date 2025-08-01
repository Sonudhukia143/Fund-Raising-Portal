import { Router } from 'express';
import fetchData from '../controllers/fetchData.js'

const router = Router();

router.get('/' , fetchData);

export default router;