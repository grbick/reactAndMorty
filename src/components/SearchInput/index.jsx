import React, { Component } from 'react'
import './searchInput.scss'

export default class SearchInput extends Component {
  render() {
    return <input type="text" name="search-input" id="div-search-input" onChange={(e)=>this.props.filterUrl(e.target.value)}/>
  }
}
