import React from "react";
import "./CoinPage.css";
import { withRouter } from "react-router-dom";

class CoinPageResult extends React.Component {
  state = {
    currentCoin: "",
    currentPrice: ""
  };

  async componentDidMount() {
    const request = await fetch(
      `https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=${this.props.match.params.id}&tsym=GBP`
    );
    const response = await request.json();
    this.setState({
      currentCoin: response.Data[0].CoinInfo
    });
    const priceRequest = await fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${this.props.match.params.id}&tsyms=USD,GBP`
    );
    const priceResponse = await priceRequest.json();
    this.setState({
      currentPrice: priceResponse
    });
    console.log(this.state.currentPrice);
  }

  render(props) {
    const { ImageUrl, CoinName, Algorithm } = this.state.currentCoin;
    const link = `https://www.cryptocompare.com${ImageUrl}`;
    return (
      <div className="single-img-con">
        <h2>{CoinName}</h2>
        <img className="coin-image" alt={CoinName} src={link} width="150px" />
        <h2>Algorithm: {Algorithm}</h2>
      </div>
    );
  }
}

export default withRouter(CoinPageResult);
