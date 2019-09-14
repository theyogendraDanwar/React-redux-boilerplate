import { connect } from 'react-redux';
import App from '../components/App/App'
import * as login from '../redux/modules/front/front'

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => { dispatch(login.load('https://swapi.co/api/planets/3/')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
