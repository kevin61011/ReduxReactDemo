import { connect } from 'react-redux'
import { changeGame } from '../actions'
import Games from '../components/Games'

const mapStateToProps = (state) => ({ game: state.games });

const mapDispatchToProps = (dispatch) => ({ onClick: (value) => dispatch(changeGame(value)) })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Games)
