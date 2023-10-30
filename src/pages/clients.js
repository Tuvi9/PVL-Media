import React from "react";
import '../components/UI/clients.css'
import Kriit from '../components/images/Kriit.JPG';
import Sasskar from '../components/images/Sasskar.JPG';
import BURGERKING from '../components/images/BURGERKING.JPG';

function Clients() {
  return (
    <>
      <div className="clients_container">
        <div className="clients_text">
          <p>Our satisfied clients!</p>
        </div>
        <div className="circle_component">
            <div className="circle">
              <img id="client_images" src={Kriit} alt="Kalle Riit"></img>
            </div>
            <div className="circle">
              <img id="client_images" src={Sasskar} alt="Aleksander Potašenkov"></img>
            </div>
            <div className="circle">
              <img id="client_images" src={BURGERKING} alt="Asko Hulkko"></img>
            </div>
        </div>
    </div>
      <div className="bottom_bar">
        <p id="bottom_bar_text">&#169;PVL-Media</p>
      </div>
    </>
  );
}

export default Clients;