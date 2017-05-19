import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import * as user from '../actions/user';

const mapStateToProps = state => ({
  login: state.get('login')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(user, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
