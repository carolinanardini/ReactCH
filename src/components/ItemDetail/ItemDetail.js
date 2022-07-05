import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


function ItemDetail(props) {
  

  return (
    <div className='flex'>
        <section className='recuadro'>
            
        <p className='imagen'>Imagen</p>
           
        </section>
       


        <section className='derecha'>
            <p className='bold large'>Nombre del producto</p>
            <p className='italic'> La más práctica de disfrutar los cereales.</p>
            <p className='italic'>Contiene fibras, ingredientes de origen natural y una riquísima y una exclusiva combinación de diferentes cereales y frutas.</p>
            <p className='italic'>Se combinan cereales cuidadosamente seleccionados, combinados con miel, cacao, maní y canela.</p>
            <p className='italic'>Con tan solo 99 calorías por unidad y todo el sabor de lo natural.</p>

            <ItemCount/>
            <button className='button'>Agregar al carrito</button>
        </section>

        {props.detail.nombre}

    </div>
  );
}


  export default ItemDetail;