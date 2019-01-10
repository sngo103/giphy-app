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

  }

  handleClick(event){
    this.setState({searchTerm: event.target.value});
    console.log(this.state.searchTerm);
  }

  render(){
    return (
      <div id="form">
        <table id="name">
          <tbody><tr>
          <td><strong><h4>
            <form>
              <input id="search-bar" name="searchTerm" type="text" value={this.state.currentfirst_name} onChange={this.updateFirst} /><br /> <br />
              <button id="button" onClick={this.handleClick}> Find my gif! </button>
            </form></h4></strong></td>
          </tr></tbody>
        </table>
      </div>
    )
  }
}

export default App;
