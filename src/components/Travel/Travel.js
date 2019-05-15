import React, {} from 'react';

const Travel = ({destination, country, photo, distance}) => {
  return <div>
    <h2>{ destination }</h2>
    <p>{ country }</p>
    <img src={ photo } alt=""></img>
    <p>{ distance }</p>
  </div>;
}

export default Travel;
