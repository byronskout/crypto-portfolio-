import React from "react";
import CryptoCoin from "./cryptoCoin";
import Container from "./container"

class CryptoCoinList extends React.Component {
    render(props) {
        return(
        <div>
        <h1>Trending Coins</h1>
        {this.props.coins.map(coin =>
        <Container>
         <div>
         {coin.CoinInfo.FullName} 
         {coin.CoinInfo.Name}
         {`www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
         </div>
         </Container>
         )}
        </div>
        )
     }
}

export default CryptoCoinList;