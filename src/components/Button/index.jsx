import React, { Component } from "react";
import "./button.scss";

export default class Button extends Component {
  render() {
    return (
      <button className="button" onClick={()=>this.props.buttonClick()}>
        {this.props.buttonContent}
      </button>
    );
  }
}
