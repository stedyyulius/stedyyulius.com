import React from 'react'
import {Link} from 'react-router-dom'
 
const Menubar = () =>{
  return (
    <div className="barra"> <ul className="nav nav-tabs">
      <li className="dropdown">
        <Link 
          to="/">
          Home
        </Link>
    </li>
      <li className="dropdown">
        <Link 
          to="/Portofolios">
          Portofolios
        </Link>
    </li>
      <li className="dropdown">
        <Link 
          to="/Interests">
          Interests
        </Link>
    </li>
      <li className="dropdown">
          <Link
            to="/Achievements">
            Achievements
          </Link>
    </li>
</ul>
</div>
  )
}

export default Menubar