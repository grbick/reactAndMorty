import React from "react";
import "./pagination.scss";
import Button from "../Button";

class Pagination extends React.Component {
  render() {
    return (
      <div className="pagination">
        <Button buttonClick = {this.props.prevPage} buttonContent = {'Previous'}/>
        <span>{this.props.currentPage}</span>
        <Button buttonClick = {this.props.nextPage} buttonContent = {'Next'}/>
      </div>
    );
  }
}

export default Pagination;
