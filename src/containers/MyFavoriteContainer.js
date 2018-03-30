import { connect } from 'react-redux'
import { modifyMyFavorite, changeGame } from '../actions'
import MyFavorite from '../components/MyFavorite'

const mapStateToProps = (state) => ({ myFavorite: state.myFavorite });

const mapDispatchToProps = (dispatch) => ({
    onClickModify: (value) => dispatch(modifyMyFavorite(value)),
    onClickChangeGame: (value) => dispatch(changeGame(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyFavorite) 
