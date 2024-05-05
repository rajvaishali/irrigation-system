import React from "react";
import image from "../Assets/image.png";
import Temperaturealarm from "../Assets/images (1).jpg";
import Humidityalarm from "../Assets/image3.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: image,
      title: "Irrigation System",
      text: "smart irrigation system, sensors and controllers are being used to check the soil's moisture level.",
    },
    {
      image: Temperaturealarm,
      title: " Temperature Alarm",
      text: "Temperature sensors play a critical role in agriculture by monitoring the ambient conditions of physical space and mechanical assets. ",
    },
    {
      image: Humidityalarm,
      title: "Humidity Alarm",
      text: "The system utilizes soil moisture sensors placed in the soil at different locations within the irrigation area.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How to manage</h1>
        <p className="primary-text">
        Smart irrigation is a method of using science and technology to save water in irrigation. It contains weather sensors, soil sensors and various controllers. The sensor monitors the current weather conditions and the actual ground humidity, and the controller controls the water valve to open or close. Realize automatic irrigation. Scientific judgment on whether, when, and how much water is needed. It is suitable for water-saving management in lawns, farmland, landscape and other areas.


        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
