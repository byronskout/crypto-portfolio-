import React from "react";
import CryptoCoin from "./cryptoCoin";
import CryptoSearch from "./cryptoSearch";
import "./crypto.css";

class CryptoCoinList extends React.Component {
  state = {
    cryptos: [],
    allCryptos: [],
    searchTerm: "",
    searchResults: []
  };
  async componentDidMount() {
    const request = await fetch(
      "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=GBP"
    );
    const response = await request.json();
    this.setState({
      cryptos: Object.values(response.Data)
    });
    const allrequest = await fetch(
      "https://min-api.cryptocompare.com/data/all/coinlist"
    );
    const allresponse = await allrequest.json();

    this.setState({
      allCryptos: Object.values(allresponse.Data)
    });
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
    this.filtered(this.state.searchTerm);
  };

  filtered = async searchTerm => {
    const filter = await this.state.allCryptos.filter(coin => {
      return coin.CoinName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    this.setState({
      searchResults: [...this.state.searchResults, filter]
    });
  };

  render() {
    return (
      <div>
        <input
          className="search-coin"
          placeholder="Search..."
          onChange={this.onChange}
          value={this.state.searchTerm}
          type="text"
        ></input>
        {this.state.searchResults.length === 0 ? (
          <div>
            <h2>Trending Coins</h2>
            <div className="flex">
              {this.state.cryptos.slice(0, 9).map(item => {
                return <CryptoCoin cryptos={item} key={item.id} />;
              })}
            </div>
          </div>
        ) : (
          <div>
            <h2>Search results</h2>
            <div className="flex">
              {this.state.searchResults
                .pop()
                .slice(0, 9)
                .map(item => {
                  return <CryptoSearch searchResults={item} key={item.id} />;
                })}
            </div>
            <button
              onClick={() =>
                this.setState({
                  searchResults: [],
                  searchTerm: ""
                })
              }
            >
              {" "}
              Reset Search{" "}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default CryptoCoinList;
