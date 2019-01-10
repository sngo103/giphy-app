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

  }

  handleClick(event){
    this.setState({currentlast_name: event.target.value});
  }

  render(){
    return (
      <div id="form">
      <table id="name">
      <tr>
      <td><strong><h4> <form>
      <input id="search-bar" name="first_name" type="text" value={this.state.currentfirst_name} onChange={this.updateFirst} /><br /> <br />
      <button id="button" onClick={this.handleClick}> Find my gif! </button>
      </form></h4></strong></td>
      </tr>
      </table>
      </div>
    )
  }
}

export default App;
