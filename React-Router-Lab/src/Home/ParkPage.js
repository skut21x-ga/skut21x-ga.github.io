import React, { Component } from "react";
import "./ParkPage.css";
import { Route, Link } from "react-router-dom";

class ParkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      park: "",
      ParkName: "",
      ParkDescription: "",
      ParkMainImage: "",
      AddressLine1: "",
      AddressLine2: "",
      AddressLine3: "",
      City: "",
      stateCode: "",
      postalCode: "",
      Directions: "",
      ParkImages: [],
      parkCode: this.props.match.params.parkCode
    };
  }
  componentDidMount() {
    let url = "https://developer.nps.gov/api/v1/parks?parkCode=";
    let fullurl =
      url +
      this.state.parkCode +
      "&api_key=y010UOulh2F9R7ahrlYpcyXUEJltY7vRei1uVxpe";
    console.log(fullurl);
    console.log("hello");

    fetch(fullurl)
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        this.setState({
          park: res.data[0],
          ParkDescription: res.data[0].description,
          ParkMainImage: res.data[0].images[0].url,
          AddressLine1: res.data[0].addresses[0].line1,
          AddressLine2: res.data[0].addresses[0].line2,
          AddressLine3: res.data[0].addresses[0].line3,
          City: res.data[0].addresses[0].city,
          stateCode: res.data[0].addresses[0].stateCode,
          postalCode: res.data[0].addresses[0].postalCode,
          Directions: res.data[0].directionsInfo,
          ParkImages: res.data[0].images,
          ParkName: res.data[0].name
        });
      });
  }
  render() {
    let parkImages = this.state.ParkImages.map(image => {
      return <img src={image.url} className="ImageBox" />;
    });
    console.log(this.state.Directions);
    return (
      <div className="ParkPage">
        <div className="ParkMainImageBox">
          <img className="ParkMainImage" src={this.state.ParkMainImage} />
        </div>
        <div className="ParkNameBox">
          <div className="ParkNameHeader">{this.state.ParkName}</div>
        </div>
        <div className="ParkDescriptionBox">
          <div className="ParkDescription">{this.state.ParkDescription}</div>
        </div>
        <div className="AddressBox">
          <div className="AddressHeader">Address</div>
          <div className="AddressInfo">
            {this.state.AddressLine1}
            {this.state.AddressLine2}
            {this.state.AddressLine3}
            <br />
            {this.state.City}, {this.state.stateCode}, {this.state.postalCode}
          </div>
        </div>
        <div className="DirectionsBox">
          <div className="DirectionsHeader">Directions</div>
          <div className="DirectionsContent">{this.state.Directions}</div>
          <div className="ReadMoreButton">Read More</div>
        </div>
        <div className="ParkImageContainer">
          <div className="ParkImageHeader">Images</div>
          <div className="ParkImageBoxes">{parkImages}</div>
        </div>
        <Link to="/">
          <div className="HomeLink">Back to Park List</div>
        </Link>
      </div>
    );
  }
}

export default ParkPage;
