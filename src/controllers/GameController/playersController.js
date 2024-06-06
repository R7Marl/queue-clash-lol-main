import { getPlayersService, getPlayersSoloQService } from "../../services/QueueServices/getPlayersService.js";
export const playersController = async(req, res) => {
    const players = await getPlayersService(req.query.tier);
    res.json(players);
};
export const playersSoloQController = async(req, res) => {
    const players = await getPlayersSoloQService(req.query.tier, req.query.winrate);
    res.json(players);
}