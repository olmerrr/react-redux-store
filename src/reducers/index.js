const initialState = {
    games: [],
    loading: true
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GAMES_LOADED' :
            return {
                games: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
export default reducer;