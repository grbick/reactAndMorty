import React from "react";
import './header.scss'
import SearchInput from "../SearchInput";

class Header extends React.Component {
  render() {
    return <div className="header">
      <SearchInput filterUrl={this.props.filterUrl}/>
    </div>
  }
}

export default Header;