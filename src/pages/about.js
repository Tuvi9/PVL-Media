import React from "react";
import PictureOfMe from '../components/images/PictureOfMe.JPG';
import '../components/UI/about.css';

function About() {
  return (
  <>
    <div>
      <div className='container'>
        <div>
          <img id="about_images" src={PictureOfMe} alt="me"/>
        </div>
        <div className="border quote">
            <p>"She seem to make me always feel like a boss, uh-uh"</p>
            <p>She said I'm in the wrong hole, I said I'm lost, uh-uh</p>
            <p>She said I'm goin' too fast, I'm exhausted</p>
            <p>Now drop to your knees for the offerin'</p>
            <p>This the theme song of something wrong</p>
            <p>Might need an intervention for this new dimension</p>
            <p>That's too new to mention, or fit in a sentence</p>
          </div>
        </div>
        <div className="bottom_bar">
          <p id="bottom_bar_text">&#169;PVL-Media</p>
        </div>
      </div>
  </>
  );
}

export default About;