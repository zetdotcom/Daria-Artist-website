import * as React from "react";
import "./About.css";

const daria1 = require('../../images/Daria-Studio.jpg');


const About = () => {

  return (
    <div>
      <div className="About">

        <img className="photos" src={daria1} alt="dariaa"/>
        <div>
          My practice aims to represent my spiritual journey to God and His mysterious presence in my life. As a Christian, Jesus is my main inspiration: my idea is therefore to present the personal and intimate relationship with Him throughout an enigmatic and ethereal imagery. I recently developed the encaustic technique, based on layers of melted wax and mixed media processes. This allows me to create a translucent and enigmatic effect on my work that reflects my seeking of God. I consider all my encaustic works as the visual prayers of my soul. <br/><br/>
          
          My practice aims to represent my spiritual journey to God and His mysterious presence in my life. This presence is conceived in many ways as the idea about the real nature of God and the concepts about His divinity may vary. For me, as a Christian, Jesus represents the main inspiration in my existence as well as in my art practice. The prayer and the Word of God is essential to my faith therefore the main idea of my work is to present this personal and intimate relationship with Him throughout the enigmatic, subtle and ethereal imagery. I consider art the language of my soul; as well as I consider photography, wax, texture and text as my means to speak. The encaustic technique which my practice develops around dates back to the 5th century B.C and involves fusing together numerous layers of molten beeswax, damar resin and pigments. The use of melted beeswax and other mediums allows me to create translucent and enigmatic effect on my work which I find compatible with my seeking of God. A significant role in my work is played by the Bible verses which I am incorporating within the creation of the encaustic collages; these verses reflect the deep nature of my pieces which I consider as the visual prayers of my soul. Furthermore, the flowers I am using in the process of creating the pieces aim to express metaphorically the growth of the Word of God and faith in me and in every one of us.
        </div>
      </div>
    </div>
  );
}

export default About;