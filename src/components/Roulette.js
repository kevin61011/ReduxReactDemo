import React, { Component } from 'react'
import SpendMoneyBtn from './SpendMoneyBtn'

export default class SlotMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: undefined,
            bet: undefined
        }
        this.rouletteData = [
            "#F00",
            "#000",
            "#F00",
            "#000",
            "#F00",
            "#000",
            "#0F0",
            "#F00",
            "#000",
            "#F00",
            "#000",
            "#F00",
            "#000",
        ]
    }

    spin() {
        

        alert("you are going to spend 300 to play roulette machine");

        let choosenOne = Math.floor(Math.random() * (this.rouletteData.length));

        this.setState({
            current: choosenOne,
        });

        let middle = Math.floor(this.rouletteData.length / 2);
        
        alert(`the numbers is "${choosenOne}"`);

        if (middle == choosenOne && this.state.bet == choosenOne) {
            this.props.winMoney(2000);
            alert("you won $2000")
        } else if (this.state.bet == choosenOne) {
            this.props.winMoney(1000);
            alert("you won $1000")
        } else if (this.rouletteData[choosenOne] == this.rouletteData[this.state.bet]) {
            this.props.winMoney(500);
            alert("you won $500")
        } else {
            alert("too bad, you lose");
        }
    }

    condition() {
        if (this.state.bet === undefined) {
            alert("you have not put any bet yet");
            return false;
        }
        return true;
    }

    setBet(index) {
        if(this.state.bet == index){
            this.setState({
                bet: undefined
            })
        } else {
            this.setState({
                bet: index
            });
        }
    }

    render() {
        let board = [];
        for (let i = 0; i < this.rouletteData.length; i++) {
            board.push(
                <div key={i} className={"slot" + ((i == this.state.current) ? " active" : "")}>
                    <input type="checkbox" onClick={() => this.setBet(i)} checked={i == this.state.bet} />
                    <div
                        className="label"
                        style={{ backgroundColor: this.rouletteData[i] }}>
                        {i}
                    </div>
                </div>
            )
        }

        return (
            <div>
                <h1>This is Roulette game</h1>
                <div className="roulette">
                    {board}
                </div>
                <SpendMoneyBtn
                    onClick={this.props.onClick}
                    condition={() => this.condition()}
                    additionalAction={() => this.spin()}
                    value={300}>
                    spend 300 to play
                </SpendMoneyBtn>
            </div>
        )
    }
}