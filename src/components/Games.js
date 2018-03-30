import React, { Component } from 'react'
import SlotMachineContainer from '../containers/SlotMachineContainer';
import RouletteContainer from '../containers/RouletteContainer'
import { gameTypes } from '../actions/index'


export default class Games extends Component {
    render() {
        let currentGame;
        console.log(this.props.game);

        switch (this.props.game) {
            case gameTypes.SLOT_MACHINE:
                currentGame = <SlotMachineContainer />
                break;
            case gameTypes.ROULETTE:
                currentGame = <RouletteContainer />
                break;
        }

        let gameBtns = [];
        for (let g in gameTypes) {
            gameBtns.push(
                <button key={g} onClick={() => this.props.onClick(gameTypes[g])}>{g}</button>
            )
        }

        return (
            <div>
                <div className="game-btn">
                    {gameBtns}
                </div>
                <div className="game-content">
                    {currentGame}
                </div>
            </div>
        )
    }
}
