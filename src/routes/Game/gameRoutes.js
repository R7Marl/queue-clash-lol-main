import { Router } from "express";
import addGameController from "../../controllers/GameController/addGameController.js";
import gameMiddleware from "../../middlewares/GameMiddleware/gameMiddleware.js";
import {playersController, playersSoloQController} from "../../controllers/GameController/playersController.js";
const GameRouter = Router();

GameRouter.get('/game/players', playersController);
GameRouter.get('/game/soloq/players', playersSoloQController)
GameRouter.post('/game/add', gameMiddleware, addGameController);


export default GameRouter;