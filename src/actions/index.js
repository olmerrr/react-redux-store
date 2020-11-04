const gamesLoaded = (newGames) => {
    return {
        type: 'GAMES_LOADED',
        payload: newGames
    }
}
export {
    gamesLoaded
};