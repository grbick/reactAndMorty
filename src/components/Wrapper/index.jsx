import React, { Component } from "react";
import "./wrapper.scss";
import Card from "../Card";
import Pagination from "../Pagination";

export default class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="cardWrapper">
          {this.props.characters.map((character) => (
            <Card 
            char={character} 
            changeSelectedCharacter={()=> this.props.changeSelectedCharacter(character)}/>
          ))}
        </div>
        <Pagination 
        nextPage={this.props.nextPage} 
        prevPage={this.props.prevPage}
        currentPage = {this.props.currentPage}
        totalPages = {this.props.totalPages}
        goToPage = {this.props.goToPage}
        />
      </div>
    );
  }
}
