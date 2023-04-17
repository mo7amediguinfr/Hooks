import React, { useState } from "react";

const Hero = () => {
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <img src="https://moneyinc.com/wp-content/uploads/2019/08/Furious-7-750x394.jpg" />
      </div>

      <div className="opacity-layer"></div>
        <div className="heroBannerContent">
          {/* <span className="title">Welcome.</span> */}
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
        </div>
    </div>
  );
};

export default Hero;
