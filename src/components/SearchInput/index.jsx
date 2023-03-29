import React, { Component } from 'react'
import './searchInput.scss'

export default class SearchInput extends Component {
  render() {
    return <input type="text" name="search-input" id="div-search-input" placeholder='Search' onKeyDown={(e)=>{
      if(e.key === 'Enter'){
        this.props.filterUrl(e.target.value)
        e.target.value = ''
      }
    }}/>
  }
}
