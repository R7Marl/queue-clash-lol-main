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