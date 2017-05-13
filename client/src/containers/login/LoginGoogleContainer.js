import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoginGoogle from '../../components/login/LoginGoogle'
import * as actions from '../../actions'


const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginGoogle)
