import React from "react";
import AboutBackground from "../Assets/WhatsApp Image 2024-05-02 at 10.09.10 PM.jpeg";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-text">
        <h1>Annual Rain in India</h1>
        <p>The average rainfall in India is 118 cm according to annual data from the Meteorological Department. The following is the distribution of rainfall in India: Extreme Precipitation regions: Northeastern regions and the windward side of the Western ghats experience an average of 400 cm of annual rainfall.</p>
        <p>India remains one of the most highly irrigated regions in the world. Although the rise in irrigation over the decades has boosted crop productivity, it has also caused the depletion of groundwater. At the same time, irrigation affects regional climate by changing the water and energy balance between the land surface and the atmosphere.

This results in a drop in temperatures over heavily irrigated parts of India such as in the Indo-Gangetic Plains. The cooling, in turn, reduces the overall summer monsoonal rainfall over the region, finds a new model-based study by researchers from the Indian Institute of Technology (IIT) Delhi. </p>
      </div>


    </div>

  );
};

export default About;
