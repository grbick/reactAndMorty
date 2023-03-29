import React, { Component } from "react";
import "./paginationCounter.scss";

export default class PaginationCounter extends Component {
  paginationSwitch(page) {
    switch (page) {
      case 1:
        return (
            <>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}} className="selectedPage">1</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>2</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>3</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>4</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>5</button>  
            </>
          );
      case 2:
        return (
            <>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>1</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}} className="selectedPage">2</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>3</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>4</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>5</button>  
            </>
          );
      case this.props.totalPages - 1:
        return (
            <>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.totalPages-4}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.totalPages-3}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.totalPages-2}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}} className="selectedPage">{this.props.totalPages-1}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.totalPages}</button>  
            </>
          );
      case this.props.totalPages:
        return (
            <>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.totalPages-4}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.totalPages-3}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.totalPages-2}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.totalPages-1}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}} className="selectedPage">{this.props.totalPages}</button>  
            </>
          );
      default:
        return (
            <>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.currentPage-2}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.currentPage-1}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}} className="selectedPage">{this.props.currentPage}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.currentPage+1}</button>
            <button onClick={(e)=>{this.props.goToPage(e.currentTarget.textContent*1)}}>{this.props.currentPage+2}</button>  
            </>
          );
    }
  }
  render() {
    return (
      <div className="paginationCounter">
        {this.paginationSwitch(this.props.currentPage)}
      </div>
    );
  }
}
