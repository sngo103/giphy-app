import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Results number={0} />
        <Results number={1} />
        <Results number={3} />
      </div>
    );
  }
}

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    }
    this.getResults = this.getResults.bind(this);
  }

  getResults(term) {
    console.log(term);
    //---------------------->
    let url = 'https://api.giphy.com/v1/gifs/search?api_key=4AI2ir7Xo4HhpJ1796Fspdin0IHsmbAY&q=cats&limit=10';
    fetch(url).
    then(response => response.json()).then((g) => {
      console.log(g["data"]);
      var images = [];
      console.log("IMAGES: ");
      console.log(images);
      this.setState({
        gifs: images,
        giflink: g["data"][this.props.number]["images"]["original"]["url"]
      });
    });
  };

  componentDidMount(){
    this.getResults();
  }

  render(){
    return (
      <div>
        <hr />
        <h2> Here are the results: </h2>
        <img src={this.state.giflink} alt="Where is my photo??!!"/>
      </div>
    )
  }
}
export default App;
