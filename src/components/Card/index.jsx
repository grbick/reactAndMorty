import React from "react";
import "./card.scss";
class Card extends React.Component {
  render() {
    return (
      <div className="card" onClick={this.props.changeSelectedCharacter}>
        <p>{this.props.char.name}</p>
        <img src={this.props.char.image} alt="character" />
      </div>
    );
  }
}

export default Card;
