import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import SlotMachineContainer from '../containers/SlotMachineContainer'
import RouletteContainer from '../containers/RouletteContainer'
import GamesContainer from '../containers/GamesContainer'
import MyFavoriteContainer from '../containers/MyFavoriteContainer'

const App = () => (
  <div>
    <HeaderContainer />
    <hr />
    <div className="main-game-block">
      <GamesContainer />
    </div>
    <div className="my-favorite-block">
      <MyFavoriteContainer />
    </div>
  </div>
)

export default App
