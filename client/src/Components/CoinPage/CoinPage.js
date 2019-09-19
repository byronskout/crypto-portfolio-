import React from "react";
import "./CoinPage.css";
import { withRouter } from "react-router-dom";

class CoinPage extends React.Component {
  state = {
    currentCoin: "",
    currentPrice: []
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
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.props.match.params.id}&tsyms=USD,EUR`
    );
    const priceResponse = await priceRequest.json();
    this.setState({
      currentPrice: Object.values(priceResponse[1])
    });
    // console.log(this.state.currentPrice);
    // const a = this.props.match.params.id;
    // const b = this.state.currentPrice[1][a].USD.PRICE
    // console.log(b)
    // console.log(Object.keys(this.state.currentPrice[1])[0])
  }

  render() {
    const { ImageUrl, Name, Algorithm } = this.state.currentCoin;
    const a = this.props.match.params;
    const b = a.id;
    const c = this.state.currentPrice[0];
    const link = `https://www.cryptocompare.com${ImageUrl}`;
    return (
      <div className="single-img-con">
        <h2>{Name}</h2>
        <img className="coin-image" alt={Name} src={link} width="150px" />
        <h2>Algorithm: {Algorithm}</h2>
      </div>
    );
  }
}

export default withRouter(CoinPage);
