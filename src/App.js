import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from './Homepage/Home';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return( 
      <div className="App">
        <Header />
        <Router>
          <Switch>
        <Route exact path="/" component={Home}/>
        </Switch>
        </Router>
        <Footer />
      </div>
    )};
};

export default App;
