import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      {/* Desktop Video */}
      <video 
        className="header-video desktop-video" 
        src="https://videos.pexels.com/video-files/10432085/10432085-hd_1920_1080_30fps.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline
      ></video>

      {/* Mobile Video */}
      <video 
        className="header-video mobile-video" 
        src="https://videos.pexels.com/video-files/9779558/9779558-hd_1080_1920_30fps.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline
      ></video>

      <div className="header-contents">
        <h2>Savor the Flavor, Experience the Passion</h2>
        <p>
          From fresh ingredients to unforgettable tastes, we bring you food crafted with love, care,
          and a commitment to excellence. Join us on a culinary adventure that’s just as unique as you are.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header







// import React from 'react'
// import './Header.css'

// const Header = () => {
//   return (
//     <div className="header">
//         <div className="header-contents">
//            <h2>Savor the Flavor, Experience the Passion</h2>
//            <p>From fresh ingredients to unforgettable tastes, we bring you food crafted with love, care, and a commitment to excellence. Join us on a culinary adventure that’s just as unique as you are</p>
//            <button>view Menu</button>
//         </div>
//     </div>
//   )
// }

// export default Header