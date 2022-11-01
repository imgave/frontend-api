//IMPORT
import { Router } from 'express';
import restaurantsRoutes from './restaurants .js';

const router = Router()

//ROUTES
router.get('/', (req, res) => res.send('This is the API root!'));

router.use('/restaurants ', restaurantsRoutes);

export default router;  