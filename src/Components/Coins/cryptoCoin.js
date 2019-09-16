import React from "react";
import Container from "./container";
import "./crypto.css";

const CryptoCoin = (props) => {
    const { cryptos } = props
    const link = `https://www.cryptocompare.com${cryptos.CoinInfo.ImageUrl}`
    const priceChange = cryptos.DISPLAY.GBP.CHANGE24HOUR.split(" ")
    const int = Number(priceChange[1])
    return (
        <div>
         <div className="flexm">
          <Container>
          <img className="coin-image" src={link} alt={cryptos.CoinInfo.Name} width="70px" />
          <h3 className="card-title">{cryptos.CoinInfo.Name}</h3>
          <h3 className="card-title">Price: {cryptos.DISPLAY.GBP.PRICE}</h3>
          <h3 className="card-title" style={int > 0 ? { color:'green'} : {color: 'red'} }>Change: {cryptos.DISPLAY.GBP.CHANGE24HOUR}</h3>
          </Container>
      </div>
      </div>
    );
  };


export default CryptoCoin;