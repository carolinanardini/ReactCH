import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home.js';
import Nosotros from './components/pages/Nosotros/Nosotros.js';
import Categorias from './components/pages/Categorias/Categorias.js';
import IniciarSesion from './components/pages/IniciarSesion/IniciarSesion.js';
import Navbar from'./components/Navbar/Navbar.js';
import ItemListContainer from'./components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/categorias" element={<Categorias/>}></Route>
        <Route path="/categorias/:idCategoria" element={<ItemListContainer/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/iniciarsesion" element={<IniciarSesion/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
