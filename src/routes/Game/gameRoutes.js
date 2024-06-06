import { Router } from "express";
import addGameController from "../../controllers/GameController/addGameController.js";
import gameMiddleware from "../../middlewares/GameMiddleware/gameMiddleware.js";
import playersController from "../../controllers/GameController/playersController.js";
const GameRouter = Router();

GameRouter.get('/game/players', playersController);
GameRouter.post('/game/add', gameMiddleware, addGameController);


export default GameRouter;