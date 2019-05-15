import React from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from './components/Travel/Travel';

function App() {
  const data = [
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
  return (
    <div className="App">
      <Travel destination={data[0].destination} country={data[0].country} photo={data[0].photo} distance={data[0].distance}/>
      <Travel destination={data[1].destination} country={data[1].country} photo={data[1].photo} distance={data[1].distance}/>
    </div>
  );
}

export default App;
