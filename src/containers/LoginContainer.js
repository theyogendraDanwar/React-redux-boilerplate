import { connect } from 'react-redux';
import Login from '../components/Login/Login'
import * as actionTypes from '../redux/modules/login/login'

const mapStateToProps = (state, props) => ({
  ...state,
  from: props.location.state ? props.location.state.from || { from: { pathname: "/" } } : { from: { pathname: "/" } }
})

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(actionTypes.load())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
