import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><Link className="linkItem" to="/">Főoldal</Link></li>
        <li><Link className="linkItem" to="/bemutatkozas">Bemutatkozás</Link></li>
        <li><Link className="linkItem" to="/kapcsolat">Kapcsolat</Link></li>
      </ul>
    </div>
  )
}

export default Navbar