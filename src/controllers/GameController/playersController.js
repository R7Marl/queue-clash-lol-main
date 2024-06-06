import { getPlayersService } from "../../services/QueueServices/getPlayersService.js";
const playersController = async(req, res) => {
    const players = await getPlayersService(req.query.tier);
    res.json(players);
};

export default playersController;