import React from "react";
import "./App.css";

import CryptoCoinList from "./Components/Coins/cryptoCoinList";
import NewsContainer from "./Components/NewsContainer/NewsContainer";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
  render() {
    return( 
      <div className="App">
        <Header />
        <CryptoCoinList />
        <NewsContainer />
        <Footer />
      </div>
    )}
}

export default App;
