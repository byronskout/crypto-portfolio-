import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from './Homepage/Home';
import NewsContainer from "./Components/NewsContainer/NewsContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoinPage from "./Components/CoinPage/CoinPage";
import CoinPageResult from "./Components/CoinPage/CoinPageResult";

class App extends React.Component {
  render() {
    return( 
      <div className="App">
        <Header />
        <Router>
          <Switch>
        <Route exact path="/" component={Home}/>
          <Route exact path="/news" component={NewsContainer}/>
          <Route exact path="/cryptos/:id" component={CoinPage}/>
          <Route exact path="/searched/:id" component={CoinPageResult}/>
        </Switch>
        </Router>
        <Footer />
      </div>
    )};
};

export default App;
