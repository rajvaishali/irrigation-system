import React from "react";
import ProfilePic from "../Assets/logo1.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Continuous monitoring, Energy harvesting, Automatic irrigation, Disease prediction, IoT security, Threat solutions/protocols, Operational technology, Data storage, Cloud platforms, and Power supplies.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Smart farming is about managing farms using technologies like IoT, robotics, drones, and AI to enhance and optimize food production.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Farming</h2>
      </div>
    </div>
  );
};

export default Testimonial;
