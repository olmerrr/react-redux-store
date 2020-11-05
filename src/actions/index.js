const gamesLoaded = (newGames) => {
    return {
        type: 'GAMES_LOADED',
        payload: newGames
    }
}

const gamesRequested = () => {
    return {
        type: 'GAMES_REQUESTED'
    }
};

const gamesError = (error) => {
    return {
        type: 'GAMES_ERROR',
        payload: error
    }
};
export {
    gamesLoaded,
    gamesRequested,
    gamesError,
};