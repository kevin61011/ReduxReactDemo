import { combineReducers } from 'redux'
import found from './found'
import games from './games'
import myFavorite from './myFavorite'

export default combineReducers({
  found,
  games,
  myFavorite
});
