import React, { Component } from "react";
import ParkComponent from "./ParkComponent.js";
import "./Home.css";

class Home extends Component {
  render() {
    console.log("Home loaded");
    return (
      <div className="ParkComponent">
        <ParkComponent />
      </div>
    );
  }
}

export default Home;
