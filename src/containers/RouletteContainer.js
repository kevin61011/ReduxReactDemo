import { connect } from 'react-redux'
import { addMoney, spendMoney } from '../actions'
import Roulette from '../components/Roulette'

// const mapStateToProps = (state) => ({ totalMoney: state.found });

const mapDispatchToProps = (dispatch) => ({
    onClick: (value) => dispatch(spendMoney(value)),
    winMoney: (value) => dispatch(addMoney(value)),
})

export default connect(
    undefined,
    mapDispatchToProps
)(Roulette)
