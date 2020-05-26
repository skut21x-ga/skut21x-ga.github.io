import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./Home/Home.js";
import Logos from "./Logo.png";
import ParkPage from "./Home/ParkPage.js";

class App extends Component {
  render() {
    return (
      <div className="site">
        <nav>
          <Link to="/">
            <h1 className="topbar">National Parks List</h1>
          </Link>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <Route
            path="/park/:parkCode"
            render={routerProps => (
              <ParkPage {...routerProps} {...this.state} />
            )}
          />
        </main>
        <footer className="Footer">
          <img className="FooterLogo" src={Logos} />
        </footer>
      </div>
    );
  }
}

export default App;
