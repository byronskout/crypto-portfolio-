import React from "react";
import NewContainer from "../Components/NewsContainer/NewsContainer";
import CryptoCoinList from "../Components/Coins/cryptoCoinList";

const Home = () => (
  <div>
    <CryptoCoinList />
    <NewContainer />
  </div>
);

export default Home;
