import React, { useState } from 'react'
import'./Home.css'
import Header from '../../components/Header/Header'
import MExplore from '../../components/M-Explore/MExplore'
import Fdisplay from '../../components/F-Display/Fdisplay'
import Fvideos from '../../components/F-videos/Fvideos'
import Fblogs from '../../components/F-blogs/Fblogs'

const Home = () => {

    const [category,setCategory] = useState("ALL");

  return (
    <div>
        <Header />
        <MExplore category={category} setCategory={setCategory}/>
        <Fdisplay category={category} />
        <Fvideos />
        {/* <Fblogs /> */}
    </div>
  )
}

export default Home