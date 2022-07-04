import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

import { useEffect, useState } from 'react';


function ItemListContainer() {
  const [info, setInfo] =useState([])

  useEffect(()=>{
    setTimeout(() => {
      fetch('data.json') //Trae el responde completo
      .then((resp)=>resp.json()) //Extrae la informacion a utilizar
      .then((data)=>setInfo(data)) //Setea esa info en nuestro state
  
    }, 500);


  },[])


  return (
    
    <div className="">

      <h2>Productos saludables y frescos</h2>
    
        <ItemList info={info}/>
    </div>

  );
}

export default ItemListContainer;