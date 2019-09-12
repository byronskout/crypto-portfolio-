import React from "react";
import "./App.css";
import NewsContainer from "./Components/NewsContainer/NewsContainer";

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
  }

  render() {
    return (
      <div className="App">
        <NewsContainer />
      </div>
    );
  }
}

export default App;
