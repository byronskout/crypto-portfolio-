import React from "react";
import "./App.css";
import CryptoCoinList from "./Components/cryptoCoinList";
import CryptoCoin from "./Components/cryptoCoin";
import Container from "./Components/container";

class App extends React.Component {
  state = {
    cryptos: []
  };

  async componentDidMount() {
    const request = await fetch(
      "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=GBP"
    );
    const response = await request.json();
    this.setState({
      cryptos: Object.values(response.Data)
    });
    console.log(this.state.cryptos);
  }

  render() {
    return <div className="App">
    <CryptoCoinList
    coins={this.state.cryptos}
    />
    </div>;
  }
}

export default App;
