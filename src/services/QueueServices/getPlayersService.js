import UserGame from "../../models/userGameSchema.js";
export const getPlayersService = async(tier) => {
    try {
        const result = await UserGame.find({
            'riotData.tier': tier
        });
        return result;
    } catch (e) {
        throw new Error(e);
    }
}

export const getPlayersSoloQService = async(tier, winrate) => {
    try {
        const result = await UserGame.find({
            'riotData.tier': tier
        });
        console.log(result)
        if (result.length === 0) {
            throw new Error("No hay jugadores");
        }
        const players = result.filter(player => {
            const playerWinrate = Number(player.riotData.winrate); 
            return Math.abs(playerWinrate - winrate) <= 5;
        });
        console.log(players)
        if(players.length === 0) {
            throw new Error("No hay jugadores con el winrate deseado.");
        }
        return players;
    } catch (e) {
        console.log("errrrr")
        throw new Error(e);
    }
}