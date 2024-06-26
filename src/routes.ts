import { Router } from 'express';
import { UserController } from './controller/UserController';
import { SurveysController } from './controller/SurveysController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();

router.post('/users', userController.create);
router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.getAll);

export { router };