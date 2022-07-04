import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

function Item(props) {
  return (
    <div>
      <section className='card'>
        <div className='centrado'>
          <p className='titulo'>{props.product}</p>
          <p>{props.image}</p>
          <p>${props.price}</p>
          
          <ItemCount/>
          <button className='button'>Agregar al carrito</button>
          <button className='button'>Ver detalle</button>
        </div>
      </section>

    </div>
  );
}

export default Item;

