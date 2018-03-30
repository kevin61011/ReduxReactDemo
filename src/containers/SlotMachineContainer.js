import { connect } from 'react-redux'
import { addMoney, spendMoney } from '../actions'
import SlotMachine from '../components/SlotMachine'

// const mapStateToProps = (state) => ({ totalMoney: state.found });

const mapDispatchToProps = (dispatch) => ({
    onClick: (value) => dispatch(spendMoney(value)),
    winMoney: (value) => dispatch(addMoney(value)),
})

export default connect(
    undefined,
    mapDispatchToProps
)(SlotMachine)
