import React from "react";
import Container from "./container";
import "./crypto.css";
import { Link } from "react-router-dom";
import CoinPage from "../CoinPage/CoinPage";

const CryptoCoin = (props) => {
    const { cryptos } = props
    const link = `https://www.cryptocompare.com${cryptos.CoinInfo.ImageUrl}`
    const priceChange = cryptos.DISPLAY.GBP.CHANGE24HOUR.split(" ")
    const int = Number(priceChange[1])
    return (
      <Link style={{ textDecoration: 'none' }} 
      to={{
        pathname: `/cryptos/${cryptos.CoinInfo.Name}`,
        data: cryptos
      }}
    >
        <div>
         <div className="flexm">
          <Container onClick={() => <CoinPage/>}>
          <img className="coin-image" src={link} alt={cryptos.CoinInfo.Name} width="70px" />
          <h3 className="card-title">{cryptos.CoinInfo.Name}</h3>
          <h3 className="card-title">Price: {cryptos.DISPLAY.GBP.PRICE}</h3>
          <h3 className="card-title" style={int > 0 ? { color:'green'} : {color: 'red'} }>Change: {cryptos.DISPLAY.GBP.CHANGE24HOUR}</h3>
          </Container>
      </div>
    </div>
   </Link>
  );
};

export default CryptoCoin;
