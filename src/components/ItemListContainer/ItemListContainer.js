import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

function ItemListContainer() {
  return (
    <div>
      <body className="body">
        <h2>Productos saludables y frescos</h2>
       
      </body>
      <section className='card'>
        <div className='centrado'>
          <p>Nombre del producto</p>
          <p>Foto del producto</p>
          <p>Precio del producto</p>
          <ItemCount/>
          <button className='addCart'>Agregar al carrito</button>
        </div>
      </section>

    </div>
  );
}

export default ItemListContainer;