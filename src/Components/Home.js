import React from "react";

import BannerImage from "../Assets/WhatsApp Image 2024-05-03 at 7.32.02 PM.jpeg";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">

        <div className="home-text-section">
          <h1 className="primary-heading">
            Correlation of moisture with Temperature
          </h1>
          <p className="primary-text">
            Temperature is something that tells us about the coldness or warmness of any object which is generally measured in celsius and Fahrenheit. It determines the intensity of the heat whereas if we talk about humidity, it talks about the water content that is present in the air, or simply we can say it determines the moisture of the air. These two concepts are different but show a great impact on each other. We will see the relation between temperature and humidity further below. Before that, let's understand more about humidity and its types.
          </p>
         
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
// import React from "react";
// import BannerImage from "../Assets/WhatsApp Image 2024-05-03 at 7.32.02 PM.jpeg";
// import Navbar from "./Navbar";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <Navbar />
//       <div className="home-banner-container">
//         <div className="home-text-section">
//           <h1 className="primary-heading">
//             Correlation of moisture with Temperature
//           </h1>
//           <p className="primary-text">
//             Temperature is something that tells us about the coldness or warmness of any object which is generally measured in celsius and Fahrenheit. It determines the intensity of the heat whereas if we talk about humidity, it talks about the water content that is present in the air, or simply we can say it determines the moisture of the air. These two concepts are different but show a great impact on each other. We will see the relation between temperature and humidity further below. Before that, let's understand more about humidity and its types.
//           </p>
//         </div>
//         <div className="home-image-section">
//           <img src={BannerImage} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;