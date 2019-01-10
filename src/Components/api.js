import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

class App extends Component {
  render() {
    return (
      <Results />
    );
  }
}

class Results extends Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    }
  }

  handleTermChange(term) {
    console.log(term);
    //---------------------->
    let url = 'https://api.giphy.com/v1/gifs/search?api_key=4AI2ir7Xo4HhpJ1796Fspdin0IHsmbAY&q=cats&limit=1';
    fetch(url).
    then(response => response.json()).then((gifs) => {
      console.log(gifs);
      console.log(gifs.length);
      this.setState({
        gifs: gifs
      });
    });
  };

  render(){
    return (
      <div>
        <img src={this.state.gifs} />
      </div>
    )
  }
}
export default App;
