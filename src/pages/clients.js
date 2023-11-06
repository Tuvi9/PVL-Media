import React from "react";
import '../components/UI/clients.css'
import '../components/UI/footer.css'
import Kriit from '../components/images/Kriit.JPG';
import Sasskar from '../components/images/Sasskar.JPG';
import BURGERKING from '../components/images/BURGERKING.JPG';

function Clients() {
  return (
    <>
    <head>
      <meta viewport="width=device-width, initial-scale=1.0" name="viewport"></meta>
    </head>
      <body>
      {/* Container for the title of the page which is a container above grid-colums*/}
        <div className="clients_container">
          <div>
            <p id="clients_text">Our satisfied clients!</p>
          </div>
          <div className="circle_component">
          {/* circle places clients into a grid*/}
            <div className="circles">
                <div>
                  {/* Images of clients*/}
                  <img id="client_images" src={Kriit} alt="Kalle Riit"></img>
                </div>
                <div>
                  {/* Images of clients*/}
                  <img id="client_images" src={Sasskar} alt="Aleksander Potašenkov"></img>
                </div>
                <div>
                  {/* Images of clients*/}
                  <img id="client_images" src={BURGERKING} alt="Asko Hulkko"></img>
                </div>
            </div>
          </div>
      </div>
      {/* Footer of my page */}
        <div className="bottom_bar">
          <p id="bottom_bar_text">&#169;PVL-Media</p>
        </div>
      </body>
    </>
  );
}

export default Clients;