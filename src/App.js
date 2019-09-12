import React from "react";
import "./App.css";

import CryptoCoinList from "./Components/cryptoCoinList";
import NewsContainer from "./Components/NewsContainer/NewsContainer";


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
  }

  render() {

    return <div className="App">
    <CryptoCoinList
    coins={this.state.cryptos}
    />
         <NewsContainer />
    </div>;
    );

  }
}

export default App;
