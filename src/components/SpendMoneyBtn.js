import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SpendMoneyBtn extends Component {

    handleBtnClick() {
        let condition = true;
        if (typeof this.props.condition == "function") {
            condition = this.props.condition();
        }
        if (condition) {
            this.props.onClick(this.props.value);
            this.props.additionalAction();
        }
    }

    render() {
        return (
            <button
                className="btn btn-spend-money"
                value={this.props.value}
                onClick={() => this.handleBtnClick()}>
                {this.props.children}
            </button>
        )
    }
}

SpendMoneyBtn.propTypes = {
    value: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}