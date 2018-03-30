const myFavorite = (state =[], action) => {
    console.log(`myFavorite' state: ${state}`);
    
    switch (action.type) {
        case "MODIFY_MY_FAVORITE":
            if(state.indexOf(action.game) > -1){
                return state.filter((f) => f != action.game);
            } else {
                return [...state, action.game]
            }
        default:
            return state;
    }
}

export default myFavorite;