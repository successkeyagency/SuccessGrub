import React, { useEffect, useRef } from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const video = mobileVideoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    }
  }, []);
  return (
    <div className="header">
      <video
        className="header-video desktop-video"
        src={assets.desktop_vid}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        poster={assets.imageposter_desk}
      ></video>

      <video
        className="header-video mobile-video"
        src={assets.mobile_vid}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        poster={assets.imageposter_phone}
      ></video>

      <div className="header-contents">
        <h2>
          Savor the <span>Flavor</span> , Experience the Passion
        </h2>
        <p>
          From fresh ingredients to unforgettable tastes, we bring you food
          crafted with love, care, and a commitment to excellence. Join us on a
          culinary adventure that’s just as unique as you are.
        </p>
        <a href="#explore-menu" className="button-style">
          View Menu
        </a>
      </div>
    </div>
  );
};

export default Header;
