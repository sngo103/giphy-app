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
    this.state = {savedfirst_name:"", savedlast_name:"", currentfirst_name:"", currentlast_name:"", isEditing: true}
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.updateFirst = this.updateFirst.bind(this);
    this.updateLast = this.updateLast.bind(this);
  }

  handleSave(event){
    if(this.state.currentfirst_name !== this.state.savedfirst_name){
      this.setState({savedfirst_name: this.state.currentfirst_name});
    }
    if(this.state.currentlast_name !== this.state.savedlast_name){
      this.setState({savedlast_name: this.state.currentlast_name});
    }
    this.setState({isEditing: false});
  }
  handleCancel(){
    this.setState({currentfirst_name: this.state.savedfirst_name, currentlast_name: this.state.savedlast_name, isEditing:false});
  }
  handleClickEdit(){
    this.setState({currentfirst_name: this.state.savedfirst_name, currentlast_name: this.state.savedlast_name, isEditing: true });
  }
  updateFirst(event){
    this.setState({currentfirst_name: event.target.value});
  }
  updateLast(event){
    this.setState({currentlast_name: event.target.value});
  }

  render(){
    return (
      <div id="form">
      <table id="name">
      <tr>
      <td><strong><h4> <form>
      <input id="search-bar" name="first_name" type="text" value={this.state.currentfirst_name} onChange={this.updateFirst} /><br /> <br />
      <button id="button" onClick={this.handleSave}> Find my gif! </button>
      </form></h4></strong></td>
      </tr>
      </table>
      </div>
    )
  }
}

export default App;
