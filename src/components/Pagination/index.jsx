import React from "react";
import "./pagination.scss";
import Button from "../Button";
import PaginationCounter from "../PaginationCounter";

class Pagination extends React.Component {
  render() {
    return (
      <div className="pagination">
        <Button buttonClick={this.props.prevPage} buttonContent={"Previous"} />
        <PaginationCounter
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages}
          goToPage={this.props.goToPage}
        />
        <Button buttonClick={this.props.nextPage} buttonContent={"Next"} />
      </div>
    );
  }
}

export default Pagination;
