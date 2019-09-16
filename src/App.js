import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from './Homepage/Home';
import Portfolio from "./Components/Portfolio/Portofolio";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoinPage from "./Components/CoinPage/CoinPage";

class App extends React.Component {
  render() {
    return( 
      <div className="App">
        <Header />
        <Router>
          <Switch>
        <Route exact path="/" component={Home}/>
        </Switch>
        <Switch>
          <Route exact path="/portfolio" component={Portfolio}/>
        </Switch>
        <Switch>
          <Route exact path="/coinpage" component={CoinPage}/>
        </Switch>
        </Router>
        <Footer />
      </div>
    )};
};

export default App;
