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
export {
    gamesLoaded,
    gamesRequested,
};