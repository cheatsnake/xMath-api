import Router from 'express';
import GeneratorController from '../controllers/generator.controller.js';

const apiRouter = new Router();

apiRouter.get("/add", GeneratorController.addition);
apiRouter.get("/sub", GeneratorController.subtraction);
apiRouter.get("/mul", GeneratorController.multiplication);
apiRouter.get("/div", GeneratorController.division);
apiRouter.get("/random", GeneratorController.random);

export default apiRouter;