import React from "react";
import NewContainer from "../Components/NewsContainer/NewsContainer";
import CryptoCoinList from "../Components/Coins/cryptoCoinList";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

const Home = () => (
    <div>
        <CryptoCoinList />
        <NewContainer />
        <ScrollUpButton 
        style={{backgroundColour: "white"}}
        />
    </div>
  );

export default Home;