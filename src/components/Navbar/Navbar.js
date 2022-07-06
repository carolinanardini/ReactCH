import logo1 from '../assets/logo1.png';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <header className="header">
          <NavLink to='/'><img src={logo1} className="logo"/></NavLink>
          
          <li> <NavLink activeClassname='active' to='/home'>Home</NavLink></li>
          <li> <NavLink activeClassname='active'to='/nosotros'>Nosotros</NavLink></li>
          <li> <NavLink activeClassname='active'to='/productos'>Productos</NavLink></li>
          <li> <NavLink activeClassname='active'to='/iniciarsesion'>Iniciar sesión</NavLink></li>
          <li><CartWidget/></li>
          
       
      </header>
    </div>
  );
}

export default Navbar;