import React, { useContext, useEffect ,useState} from 'react'
import img from '../../src/Component/Assets/sliderimg/lts.jpg'
import Item from '../Component/Item/item';
import './CSS/luck.css'
import { ShopContext } from '../Context/ShopContext';
const LatestCollectionspage = () => {

    
  const [new_latestcollection,setNew_latestcollection]=useState([]);
  const {url} =useContext(ShopContext)

  useEffect(()=>{
        fetch(`${url}/latestcollection`).then((response)=>response.json())
        .then((data)=>setNew_latestcollection(data));
  },[url])
    return (
        <>
        <img src={img} className='bgimg' alt=''  />
        <div className='New-collection'>
        <h1>Latest COLLECTIONS</h1>
        <hr />
        <div className="collections">
          {
            new_latestcollection.map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })
          }
        </div>
      </div>
      </>
    )
}

export default LatestCollectionspage