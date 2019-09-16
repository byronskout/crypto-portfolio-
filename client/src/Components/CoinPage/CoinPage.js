import React from "react";
import "./CoinPage.css";
import { withRouter } from "react-router-dom";

const CoinPage = props => {
    const link = `https://www.cryptocompare.com${props.location.data.CoinInfo.ImageUrl}`
    return (
        <div className="single-img-con">
          <h2>{props.location.data.CoinInfo.Name}</h2>
          <img className="coin-image" src={link} width="150px" />
          <h2>Price: {props.location.data.DISPLAY.GBP.PRICE}</h2>
          <h2>Algorithm: {props.location.data.CoinInfo.Algorithm}</h2>
          <h2>High Day: {props.location.data.DISPLAY.GBP.HIGHDAY}</h2>
          <h2>Low Day: {props.location.data.DISPLAY.GBP.LOWDAY}</h2>
          <h2>Supply: {props.location.data.DISPLAY.GBP.SUPPLY}</h2>
        </div>
    );
  };
  
  export default withRouter(CoinPage);