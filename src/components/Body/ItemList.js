import './ItemList.css';
import Item from '../Item/Item.js';
import { useEffect, useState } from 'react';

function ItemList() {

    const [info, setInfo] =useState([])

    useEffect(()=>{
      setTimeout(() => {
        fetch('data.json') //Trae el responde completo
        .then((resp)=>resp.json()) //Extrae la informacion a utilizar
        .then((data)=>setInfo(data)) //Setea esa info en nuestro state
    
      }, 2000);
      

    },[])

    return (
      <div>
        <body className="">

          <div className='catalogo'>
              {info.map(i=> <Item product={i.nombre} price={i.precio} />)}
          </div>
         
        </body>
  
      </div>
    );
  }


  export default ItemList;