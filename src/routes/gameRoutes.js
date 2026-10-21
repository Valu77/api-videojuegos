import { Router } from 'express';
const router = Router();
import gameController from '../controllers/gameController';

router.get('/', gameController.getGames);
router.get('/:id', gameController.getGame);

export default router;