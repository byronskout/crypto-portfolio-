import React from "react";
import "./CoinPage.css";
import { withRouter } from "react-router-dom";

const CoinPageResult = props => {
    const link = `https://www.cryptocompare.com${props.location.data.ImageUrl}`
    return (
        <div className="single-img-con">
          <h2>{props.location.data.CoinName}</h2>
          <img className="coin-image" src={link} width="150px" />
          <h2>Algorithm: {props.location.data.Algorithm}</h2>
        </div>
    );
  };
  
  export default withRouter(CoinPageResult);