import React from "react";
import CryptoCoin from "./cryptoCoin";
import "./crypto.css";

class CryptoCoinList extends React.Component {
    state = {
        cryptos: []
    }
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
        return (
          <div>
            <h2>Trending Coins</h2>
            <div className="flex">
            {this.state.cryptos.map(item => {
             return <CryptoCoin cryptos={item} key={item.id} />
            })}
            </div>
          </div>
        );
    }
 }

export default CryptoCoinList;
