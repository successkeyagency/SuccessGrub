import React, { useContext, useState } from 'react'
import './Navbar.css'
import{assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { Scontext } from '../../context/Scontext';




const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("Menu")

  const {getTotalCartAmount} = useContext(Scontext);
  
  return (
    <div className='navbar'>
     <Link to='/'><img className='desktop' src={assets.logo} width={100} alt="" /></Link> 
      <Link to='/'> <img className='mobile' src={assets.logo} width={50} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home" ?"active": ""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu" ?"active": ""}>Menu</a>
        <a href='#explore-menu' onClick={()=>setMenu("Made-By")} className={menu==="Made-By" ?"active": ""}>Made-By</a>
        <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us" ?"active": ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
         <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}> </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
        

      </div>
    </div>
  )
}

export default Navbar