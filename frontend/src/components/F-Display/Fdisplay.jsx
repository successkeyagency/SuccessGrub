import React, { useContext } from 'react'
import './Fdisplay.css'
import { Scontext } from '../../context/Scontext'
import FItems from '../F-Item/FItems'

const Fdisplay = ({category}) => {


    const {food_list} = useContext(Scontext)

    if (!food_list || food_list.length === 0) {
      return <p>Loading or no items to show...</p>
    }


  return (
    <div className='food-display' id='food-display'>
        <h2>Top DISHES YUM!</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=> {
                if (category==="ALL" || category===item.category) {
                return <FItems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>    
                }
                
            })}
        </div>
        

    </div>
    
  )
}

export default Fdisplay