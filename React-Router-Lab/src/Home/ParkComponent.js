import React, { Component } from "react";
import "./ParkComponent.css";
import { Route, Link } from "react-router-dom";
class ParkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    };
  }
  componentDidMount() {
    let url =
      "https://developer.nps.gov/api/v1/parks?statecode=TX&api_key=y010UOulh2F9R7ahrlYpcyXUEJltY7vRei1uVxpe";
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          parks: res.data
        });
      });
  }

  render() {
    console.log(this.state.parks);
    let AllParks = this.state.parks.map(parks => {
      return (
        <div className="parkcomponent-container">
          <Link to={`park/${parks.parkCode}`}>
            <p className="ParkName">{parks.name}</p>
            <div className="ImageContainer">
              <div className="fade" />
              <img className="Image" src={parks.images[0].url} />
            </div>
          </Link>
        </div>
      );
    });

    return <div className="AllParks">{AllParks}</div>;
  }
}
export default ParkComponent;





















