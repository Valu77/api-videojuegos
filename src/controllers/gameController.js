import { getAllGames, getGameById } from '../services/gameService';

const getGames = (req, res) => {
    const games = getAllGames();
    res.json({ success: true, data: games });
};

const getGame = (req, res) => {
    const { id } = req.params;
    const game = getGameById(id);
    if (!game) {
        return res.status(404).json({ success: false, message: 'Juego no encontrado' });
    }
    res.json({ success: true, data: game });
};

export default {
    getGames,
    getGame
};