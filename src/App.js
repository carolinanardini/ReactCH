import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home.js';
import Nosotros from './components/pages/Nosotros/Nosotros.js';
import Productos from './components/pages/Productos/Productos.js';
import IniciarSesion from './components/pages/IniciarSesion/IniciarSesion.js';
import Navbar from'./components/Navbar/Navbar.js';
import ItemListContainer from'./components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/productos" element={<Productos/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/iniciarsesion" element={<IniciarSesion/>}></Route>
      </Routes>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
