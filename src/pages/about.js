import React from "react";
import PictureOfMe from '../components/images/PictureOfMe.JPG';
import '../components/UI/about.css';

function About() {
  return (
  <>
    <div>
      <div className='container'>
        <div className='image'>
          <img src={PictureOfMe} alt="me" ></img>
        </div>
        <div className="border">
        <div className='quote'>
            <p>"She said I'm in the wrong hole I said I'm lost. Uh, uh!"</p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default About;