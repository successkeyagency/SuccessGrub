import React, { useState } from 'react'
import'./Home.css'
import Header from '../../components/Header/Header'
import MExplore from '../../components/M-Explore/MExplore'
import Fdisplay from '../../components/F-Display/Fdisplay'
import Fvideos from '../../components/F-videos/Fvideos'
import ContactAndLocation from '../../components/Contact-Location/ContactAndLocation'
import Reservation from '../../components/Reservation/Reservation'

const Home = () => {

    const [category,setCategory] = useState("ALL");

  return (
    <div>
        <Header />
        <MExplore category={category} setCategory={setCategory}/>
        <Fdisplay category={category} />
        <Fvideos />
        <Reservation />
        <ContactAndLocation />
    </div>
  )
}

export default Home