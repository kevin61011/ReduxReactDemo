import {gameTypes} from '../actions/index'

const games = (state = gameTypes.SLOT_MACHINE, action) => {
    console.log(`games' state: ${state}`);
    
    switch (action.type) {
        case "CHANGE_GAME":
            return action.game;
        default:
            return state;
    }
}

export default games;