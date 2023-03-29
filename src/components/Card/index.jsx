import React from "react";
import "./card.scss";
class Card extends React.Component {
  render() {
    return (
      <div className="card" onClick={this.props.changeSelectedCharacter}>
        <p>{this.props.char.name}</p>
        <img src={this.props.char.image} alt="character" />
        <div className={this.props.char.status === 'unknown' ? 'charInfo unknown': this.props.char.status === 'Dead' ? 'charInfo dead': 'charInfo'}>
          <p>Status:</p>
          <p>{this.props.char.status}</p>
        </div>
      </div>
    );
  }
}

export default Card;
