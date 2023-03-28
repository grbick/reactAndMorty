import React from "react";
import HomePage from "./pages/Home";
import CharPage from "./pages/CharPage";
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.changeSelectedCharacter = this.changeSelectedCharacter.bind(this)
    this.filterUrl = this.filterUrl.bind(this)
    this.backToHome = this.backToHome.bind(this)
    this.MAXPAGES = 1;
    this.state = {
      inputValue: '',
      pageNumber: 1,
      selectedCharacter: null,
      characters: []
    }
  }
  fetchData() {
    fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.pageNumber}&name=${this.state.inputValue}`)
      .then((response) => response.json())
      .then((data) => { this.MAXPAGES = data.info.pages; this.setState({ characters: data.results }) })
  }
  nextPage() {
    let next = this.state.pageNumber + 1;
    if (next > this.MAXPAGES) next = this.MAXPAGES;
    this.setState({ pageNumber: next })
  }
  prevPage() {
    let prev = this.state.pageNumber - 1;
    if (prev < 1) prev = 1;
    this.setState({ pageNumber: prev })
  }
  changeSelectedCharacter(newCharacter) {
    this.setState({ selectedCharacter: newCharacter })
  }
  filterUrl(newInputValue) {
    this.setState({ inputValue: newInputValue })
  }
  backToHome() {
    this.setState({ inputValue: '', pageNumber: 1, selectedCharacter: null })
  }
  componentDidMount() {
    this.fetchData()
  }
  selectCharacter() {

  }
  componentDidUpdate(prevProps, prevState) {
    if ((prevState.pageNumber !== this.state.pageNumber) || (prevState.inputValue !== this.state.inputValue))
      this.fetchData()
  }
  render() {
    return <div className="app">
      {(this.state.selectedCharacter !== null) ?
        <CharPage
          backToHome={this.backToHome}
          selected={this.state.selectedCharacter}
          /> :
          <HomePage
          backToHome={this.backToHome}
          characters={this.state.characters}
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          currentPage={this.state.pageNumber}
          changeSelectedCharacter={this.changeSelectedCharacter}
          filterUrl={this.filterUrl}
        />}
    </div>
  }
}

export default App;
