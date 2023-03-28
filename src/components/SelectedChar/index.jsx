import React, { Component } from 'react'

export default class SelectedChar extends Component {
  render() {
    return (
      <div>{this.props.selected.name}</div>
    )
  }
}
