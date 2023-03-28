import React from "react";
import "./charPage.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SelectedChar from "../../components/SelectedChar";

class CharPage extends React.Component {
  render() {
    return (
      <div className="charPage" >
        <Header />
        <SelectedChar selected ={this.props.selected}/>
        <Footer />
      </div>
    );
  }
}

export default CharPage;
