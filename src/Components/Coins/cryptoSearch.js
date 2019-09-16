import React from "react";
import Container from "./container";
import "./crypto.css";

const CryptoSearch = (props) => {
    const { searchResults } = props
    const link = `https://www.cryptocompare.com${searchResults.ImageUrl}`
    return (
        <Container>
        <div>
        <img className="coin-image" src={link} alt={searchResults.link} width="70px" />
        <h3 className="card-title">{searchResults.CoinName}</h3>
        </div>
        </Container>
  );
};

export default CryptoSearch;
