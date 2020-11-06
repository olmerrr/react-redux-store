const gamesRequested = () => {
    return {
        type: 'FETCH_GAMES_REQUEST'
    }
};

const gamesLoaded = (newGames) => {
    return {
        type: 'FETCH_GAMES_SUCCESS',
        payload: newGames
    }
}

const gamesError = (error) => {
    return {
        type: 'FETCH_GAMES_FAILURE',
        payload: error
    }
};
const fetchGames = (gamestoreService, dispatch) => () => {
    dispatch(gamesRequested());
    gamestoreService.getGames()
        .then((data) => dispatch(gamesLoaded(data)))
        .catch((err) => dispatch(gamesError(err)));
    }
export {
    fetchGames
};