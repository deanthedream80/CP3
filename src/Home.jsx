import React from 'react';
var imageName = require('./img/logo2.png');

export default function Home() {
  return (
    <div className='container text-center'>
        <img src={imageName} width='400px' alt="Logo" />
        <h1>Thanks for coming down to MeepleTown!</h1>
    </div>
  )
}
