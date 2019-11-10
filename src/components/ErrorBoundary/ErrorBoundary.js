import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    err: false,
    errinfo: null,
  }
  componentDidCatch(err, errinfo) {
    this.setState({
      err: true,
      errinfo
    })
  }
  render() {
    const { showErrorText, children } = this.props
    const { err } = this.state
    return (
      err ? <div className="error-section">Opps! {showErrorText}</div> : { ...children }
    )
  }
}

export default ErrorBoundary;