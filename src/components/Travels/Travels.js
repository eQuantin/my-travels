import React, { Component } from 'react';

import Travel from '../Travel/Travel';

class Travels extends Component {
  travels = [
    {
      destination: "Tokyo",
      country: "Japon",
      photo: "https://www.gotokyo.org/fr/spot/6/images/6_0099_20_670x450.jpg",
      distance: "loin genre vraiment loin"
    },
    {
      destination: "Paris",
      country: "France",
      photo: "https://news.chastin.com/wp-content/uploads/2018/11/paris.jpg",
      distance: "t'es con ? t'y es deja"
    }
  ]

  render() {
    return <div>
      {this.travels.map(travel => 
        <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance}/>
      )}
    </div>;
  }
}

export default Travels;
