import React from "react";
import "./header.scss";
import SearchInput from "../SearchInput";
import Button from "../Button";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Button
          buttonClick={this.props.backToHome}
          buttonContent={"React And Morty"}
        />
        <SearchInput filterUrl={this.props.filterUrl} />
      </div>
    );
  }
}

export default Header;
