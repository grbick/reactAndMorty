import React from "react";
import "./home.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homePage">
        <Header filterUrl = {this.props.filterUrl}/>
        <Wrapper
          nextPage={this.props.nextPage}
          prevPage={this.props.prevPage}
          characters={this.props.characters}
          currentPage={this.props.currentPage}
          changeSelectedCharacter={this.props.changeSelectedCharacter}
        />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
