import games from '../data/games';

const getAllGames = () => {
    return games;
};

const getGameById = (id) => {
    return games.find(game => game.id === parseInt(id));
};

export default {
    getAllGames,
    getGameById
};