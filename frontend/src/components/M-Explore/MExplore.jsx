import React from 'react';
import './MExplore.css';
import { menu_list } from '../../assets/assets';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const MExplore = ({ category, setCategory }) => {
  const location = useLocation();

useEffect(() => {
  if (location.hash === "#explore-menu") {
    const el = document.getElementById("explore-menu");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    }
  }
}, [location]);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>
        {'E'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'x'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'p'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'l'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'o'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'r'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'e'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {' '.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'o'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'u'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'r'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {' '.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'m'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'e'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'n'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {'u'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </h1>
      <p className='explore-menu-text'>Choose From Our Diverse Menu</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "ALL" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  );
};

export default MExplore;
