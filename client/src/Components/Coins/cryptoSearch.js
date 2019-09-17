import React from "react";
import Container from "./container";
import "./crypto.css";
import { Link } from "react-router-dom";

const CryptoSearch = props => {
  const { searchResults } = props;
  const link = `https://www.cryptocompare.com${searchResults.ImageUrl}`;
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{
        pathname: `/searched/${searchResults.Name}`,
        data: searchResults
      }}
    >
      <div className="flexm">
        <Container>
          <img
            className="coin-image"
            src={link}
            alt={searchResults.link}
            width="70px"
          />
          <h3 className="card-title">{searchResults.CoinName}</h3>
        </Container>
      </div>
    </Link>
  );
};

export default CryptoSearch;
