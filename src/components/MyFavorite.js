import React, { Component } from 'react'
import { gameTypes } from '../actions/index'


export default class MyFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
    }

    showEdit() {
        this.setState({
            edit: true
        })
    }

    closeEdit() {
        this.setState({
            edit: false
        })
    }

    render() {

        let editBtn = [];
        for (let g in gameTypes) {
            let exist = this.props.myFavorite.indexOf(g) > -1;
            editBtn.push(
                <button key={`edit-${g}`} className="edit-btn" onClick={() => this.props.onClickModify(g)}>{(exist ? "V " : "X ") + g}</button>
            )
        }


        let myFavoriteBtn = [];
        for (let g in this.props.myFavorite) {
            myFavoriteBtn.push(
                <button key={`favorite-${g}`} className="favorite-btn" onClick={() => this.props.onClickChangeGame(this.props.myFavorite[g])}>{this.props.myFavorite[g]}</button>
            )
        }

        return (
            <div className="my-favorite-wrap">
                <div className="title-block">
                    <span className="title">My Favorite</span>
                    <button onClick={() => this.showEdit()} style={{ display: (this.state.edit ? "none" : "") }}>Edit</button>
                    <button onClick={() => this.closeEdit()} style={{ display: (this.state.edit ? "" : "none") }}>Confirm</button>
                </div>
                <div className="my-favorite" style={{ display: (this.state.edit ? "none" : "") }}>
                    <div>
                        {(myFavoriteBtn.length == 0)?"you dont have any favorite game yet":myFavoriteBtn}
                    </div>
                </div>
                <div className="my-favorite-edit" style={{ display: (this.state.edit ? "" : "none") }}>
                    <div>
                        {editBtn}
                    </div>
                </div>
            </div>
        );
    }
}