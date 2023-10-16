import React from "react";
import PictureOfMe from '../components/images/PictureOfMe.JPG';
import '../components/about.css';

function Gallery() {
  return (
    <body>
      <div>
        <div className="border_padding">
          <div className='border'>
            <img src={PictureOfMe} alt="me" width='600' height='600'></img>
            <p>"She said i'm in the wrong hole I said i'm lost Uh uh!</p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Gallery;