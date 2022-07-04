import './App.css';
import Navbar from'./components/Navbar/Navbar.js';
import ItemListContainer from'./components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
