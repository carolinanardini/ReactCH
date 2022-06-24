import logo1 from '../assets/logo1.png';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.js';

function Navbar() {
  return (
    <div>
      <header className="header">
          <img src={logo1} className="logo"/>
          <ul>Home</ul>
          <ul>Nosotros</ul>
          <ul>Productos</ul>
          <ul>Iniciar sesión</ul>
          <ul><CartWidget/></ul>
       
      </header>
    </div>
  );
}

export default Navbar;