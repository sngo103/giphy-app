import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/search';
import Results from './Components/api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeautifulHeader section="Getting Giphy with It"/>
        <SearchBar />
        <Results />
      </div>
    );
  }
}

class BeautifulHeader extends Component{
  render(){
    return (
      <div id="header">
        <h1 id="header-title"> {this.props.section} </h1>
        <h4 id="header-line"> Samantha Ngo | David Ullauri</h4>
        <h4 id="header-line"> 2019 January 10 </h4>
      </div>
    )
  }
}

export default App;
