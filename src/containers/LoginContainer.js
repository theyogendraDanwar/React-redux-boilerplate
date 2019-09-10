import { connect } from 'react-redux';
import Login from '../components/Login/Login'
import * as actionTypes from '../redux/modules/login/login'

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(actionTypes.load())
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);
