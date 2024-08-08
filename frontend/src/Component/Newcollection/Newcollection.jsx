import React, { useContext, useEffect, useState } from 'react';
import Item from '../Item/item'
import './Newcollection.css';
import { ShopContext } from '../../Context/ShopContext';
import new_collection from '../Assets/new_collections';
const Newcollection = () => {
  const { url } = useContext(ShopContext)

  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch(`${url}/newcollections`).then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, [url])

  return (

    <div className='New-collection'>
      <h1>Tranding Item</h1>
      <hr />
      <div className="collections">
        {
          new_collection.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })
        }
      </div>
    </div>
  )
}

export default Newcollection
