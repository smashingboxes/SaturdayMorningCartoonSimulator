import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'
import * as actions from '../actions'


const mapStateToProps = state => ({
  user: state.login.user
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
