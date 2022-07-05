import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


function ItemDetail(props) {
  

  return (
    <div className='flex'>
        <section className='recuadro'>
            
        <p className='imagen'>{props.detail.img}</p>
           
        </section>
       


        <section className='derecha'>
            <p className='bold large'>{props.detail.nombre}</p>
            
            <p className='italic'> {props.detail.descripcion1}</p>
            <p className='italic'> {props.detail.descripcion2}</p>
            <p className='italic'> {props.detail.descripcion3}</p>
            <p className='italic'> {props.detail.descripcion4}</p>
            <ItemCount/>
            <button className='button'>Agregar al carrito</button>
        </section>

        

    </div>
  );
}


  export default ItemDetail;