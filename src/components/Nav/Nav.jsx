import React from 'react'
import { useGlobalContext } from '../../Context'
import "./Nav.scss"

function Nav() {
  const {amount}=useGlobalContext();
  return (
    <div className='nav'>

        <h1>
            UseReducer
        </h1>
        <p>
          <i className="uil uil-shopping-basket"></i><sup>{amount}</sup>
        </p>
        
    </div>
  )
}

export default Nav