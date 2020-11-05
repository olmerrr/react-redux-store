const initialState = {
    games: [],
    loading: true,
    error: null,
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GAMES_REQUESTED' :
            return {
                games: [],
                loading: true,
                error: null,
            };
        case 'GAMES_LOADED' :
            return {
                games: action.payload,
                loading: false,
                error: null,
            };
        case 'GAMES_ERROR' :
            return {
                games: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
export default reducer;