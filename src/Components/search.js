import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

class App extends Component {
  render() {
    return (
      <SearchBar />
    );
  }
}

class SearchBar extends Component{
  constructor(props){
    super(props)

    this.state = {
      searchTerm: "",
    }

    this.handleTerm = this.handleTerm.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleTerm(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleClick(event){
    this.setState({searchTerm: event.target.value});
    event.preventDefault();
    console.log(this.state.searchTerm);
  }

  render(){
    return (
      <div>
        <div id="form">
          <table id="name">
            <tbody><tr>
            <td><strong><h4>
              <form>
                <input id="search-bar" name="searchTerm" type="text" value={this.state.searchTerm} onChange={this.handleTerm} /> <br /> <br />
                <button id="button" onClick={this.handleClick}> Find my gif! </button>
              </form></h4></strong></td>
            </tr></tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;
