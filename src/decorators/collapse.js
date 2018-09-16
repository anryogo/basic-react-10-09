import React from 'react'

export default (OriginalComponent) =>
  class CollapseComponent extends React.Component {
    state = {
      isCollapse: false
    }

    toggleCollapse = () => {
      this.setState({
        isCollapse: !this.state.isCollapse
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleCollapse={this.toggleCollapse}
        />
      )
    }
  }
