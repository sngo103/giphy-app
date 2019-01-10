import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="grid">
        <Results number={0} />
        <Results number={1} />
        <Results number={2} />
        <Results number={3} />
        <Results number={4} />
        <Results number={5} />
        <Results number={6} />
        <Results number={7} />
        <Results number={8} />
        <Results number={9} />
        <Results number={10} />
        <Results number={11} />
        </div>
      </div>
    );
  }
}

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      term: ""
    }
    this.getResults = this.getResults.bind(this);
  }

  getResults(term) {
    console.log(term);
    //---------------------->
    let url = 'https://api.giphy.com/v1/gifs/search?api_key=4AI2ir7Xo4HhpJ1796Fspdin0IHsmbAY&q=' + term + '&limit=12';
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

        <img src={this.state.giflink} alt="Where is my photo??!!"/>
      </div>
    )
  }
}
export default App;
