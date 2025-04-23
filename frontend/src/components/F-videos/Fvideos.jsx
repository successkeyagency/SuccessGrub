import React from 'react';
import './Fvideos.css';
import { assets } from '../../assets/assets';

const reviews = [
    {
      id: 1,
      videoSrc: 'https://videos.pexels.com/video-files/9779558/9779558-hd_1080_1920_30fps.mp4',
      name: 'Maria D.',
      rating: 5,
      quote: "Absolutely delicious! Felt like a 5-star restaurant experience at home."
    },
    {
      id: 2,
      videoSrc: 'https://videos.pexels.com/video-files/9984065/9984065-uhd_1440_2560_25fps.mp4',
      name: 'James O.',
      rating: 4,
      quote: "The flavor was incredible—perfectly seasoned and fresh!"
    },
    {
      id: 3,
      videoSrc: 'https://videos.pexels.com/video-files/7361610/7361610-uhd_1440_2560_25fps.mp4',
      name: 'Lena K.',
      rating: 5,
      quote: "Beautiful presentation and taste. Can’t wait to order again!"
    },
    {
      id: 4,
      videoSrc: 'https://videos.pexels.com/video-files/3298479/3298479-uhd_1440_2732_25fps.mp4',
      name: 'Andre R.',
      rating: 5,
      quote: "The texture, the flavor—just wow. I’m definitely recommending this to my friends."
    },
    {
      id: 5,
      videoSrc: 'https://videos.pexels.com/video-files/31387619/13393550_1080_1920_30fps.mp4',
      name: 'Samantha T.',
      rating: 4,
      quote: "Quick delivery, piping hot, and full of flavor. A win in my book!"
    },
    {
      id: 6,
      videoSrc: 'https://videos.pexels.com/video-files/5145964/5145964-hd_1080_1920_30fps.mp4',
      name: 'Eric M.',
      rating: 5,
      quote: "This dish hit every note—savory, sweet, and beautifully cooked!"
    },
    {
      id: 7,
      videoSrc: 'https://videos.pexels.com/video-files/18048600/18048600-hd_1080_1920_60fps.mp4',
      name: 'Natalie P.',
      rating: 5,
      quote: "One of the best food experiences I’ve had—hands down!"
    },
    {
      id: 8,
      videoSrc: 'https://videos.pexels.com/video-files/4253322/4253322-uhd_1440_2732_25fps.mp4',
      name: 'Zach L.',
      rating: 4,
      quote: "Impressed by the freshness. Tasted just like a home-cooked meal!"
    }
  ];
  

const Fvideos = () => {
  return (
    <section className="fvideo-container">
      <h2 className="fvideo-title">🍽️ Fvideos — Food Lover Reviews</h2>
      <div className="fvideo-wrapper">
        {reviews.map((review, index) => (
          <div className="fvideo-card" key={index}>
            <video
              src={review.videoSrc}
              muted
              loop
              autoPlay
              playsInline
              className="fvideo"
            />
            <div className="fvideo-text">
              <p className="fvideo-quote">“{review.quote}”</p>
              <div className="fvideo-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <img src={assets.rating_starts} alt="star" key={i} />
                ))}
              </div>
              <span className="fvideo-name">— {review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fvideos;
