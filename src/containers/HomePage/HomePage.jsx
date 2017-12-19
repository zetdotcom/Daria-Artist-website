import * as React from "react";
import BgImages from "./BgImages";

import BackgroundSlideshow from 'react-background-slideshow';


import image1 from '../../images/Daria-Studio.jpg';
import image2 from '../../images/daria.jpg';
import image3 from '../../images/Daria-Portrait.jpg';

import "./HomePage.css";

const HomePage = () => {

  return (
    <div>
      <div className="HomePage">
      
          <div className="mainPart">

            <div className="mainPhotos">
            
            <div>
            <BackgroundSlideshow  images={[ image1, image2, image3 ]} />
          </div>

              <div className="statement">
                <h2>Czesc, jestem Daria!! Jeste artyste
                Czesc, jestem Daria!! Jeste artyste
                Czesc, jestem Daria!! Jeste artyste
                Czesc, jestem Daria!! Jeste artyste</h2>
              
            
              </div>
              
            </div>

          </div>

      </div>
    </div>
  );
}

export default HomePage;