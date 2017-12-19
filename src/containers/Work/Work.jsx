import * as React from "react";
import galeria from "./galeria.json";

import "./Work.css";


const Work = () => {

  return (
    <div>
      <div className="Work">
      {
        galeria.map((item, index) => {
          const workImage = require('./galeria.json');

          return (
            <div className="project" key={index}>
              <div className="image">
                <img src={workImage[index].image} />
              </div>
              <div className="description">
                {item.description}
              
                <div className="materials">
                  Materials: {item.materials}
                </div>
              </div>
            </div>
          )
        })
      } 


      </div>
    </div>
  );
}

export default Work;