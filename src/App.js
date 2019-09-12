import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    cryptos: []
  };

  async componentDidMount() {
    const request = await fetch(
      "https://min-api.cryptocompare.com/data/all/coinlist"
    );
    const response = await request.json();
    this.setState({
      cryptos: Object.values(response.Data)
    });
    console.log(this.state.cryptos);
  }

  render() {
    return <div className="App">app</div>;
  }
}

export default App;
