import React from "react";
// Where the images are imported
import PictureOfMe from '../components/images/PictureOfMe.JPG';
// Styling file for this page
import '../components/UI/about.css';
import '../components/UI/footer.css';

function About() {
  return (
  <>
  <head>
    <meta viewport="width=device-width, initial-scale=1.0" name="viewport"></meta>
  </head>
    <body>
      {/* Container which sets display viewport*/}
      <div className='container'>
        {/* Picture of me for (About us) page */}
        <img id="about_images" src={PictureOfMe} alt="me"/>
        {/* My border and my text are in one class*/}
        <div className="border_and_text">
            <p>
            "She seem to make me always feel like a boss, uh-uh"<br/>
            She said I'm in the wrong hole, I said I'm lost, uh-uh<br/>
            She said I'm goin' too fast, I'm exhausted<br/>
            Now drop to your knees for the offerin'<br/>
            This the theme song of something wrong<br/>
            Might need an intervention for this new dimension<br/>
            That's too new to mention, or fit in a sentence
            </p>
          </div>
        </div>
        {/* Footer of my page */}
        <footer className="bottom_bar">
          <div id="bottom_bar_text">&#169;PVL-Media</div>
        </footer>
      </body>
  </>
  );
}

export default About;