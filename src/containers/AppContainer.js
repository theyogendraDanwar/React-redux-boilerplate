import { connect } from 'react-redux';
import App from '../components/App/App'
import * as actionTypes from '../redux/modules/sim/simpleReducer'

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(actionTypes.simpleAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);