import React, { Component } from "react";
import "./selectedChar.scss";

export default class SelectedChar extends Component {
  render() {
    return (
      <div className="selectedChar">
        <figure>
          <img src={this.props.selected.image} alt="" />
        </figure>
        <div className="data">
          <p>name: {this.props.selected.name}</p>
          <p>gender: {this.props.selected.gender}</p>
          <p>current location: {this.props.selected.location.name}</p>
          <p>species: {this.props.selected.species}</p>
          <p
            className={
              this.props.selected.status === "unknown"
                ? "unknown"
                : this.props.selected.status === "Dead"
                ? " dead"
                : "alive"
            }
          >
            status: {this.props.selected.status}
          </p>
        </div>
      </div>
    );
  }
}
