import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginGoogle from '../../components/login/LoginGoogle';
import * as user from '../../actions/user';


const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(user, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginGoogle);
