import React, { useContext, useEffect, useState } from 'react'
import Item from '../Component/Item/item';
import './CSS/exoffer.css';
import img1 from '../Component/Assets/sliderimg/s8.jpg'
import { ShopContext } from '../Context/ShopContext';

const Exclusiveoffer = () => {
    const [offers, setOffers] = useState([]);
    const  {url} =useContext(ShopContext)

    useEffect(() => {
        fetch(`${url}/offers`)
            .then(response => response.json())
            .then(data => setOffers(data));
    }, [url]);
    return (
        <>
        <img src={img1} className='imgclss' alt='' />
        <div className="exoffers">
            <header className="offers-header">
                <h1>Exclusive Offers</h1>
                <hr />
            </header>
            <section className="excontiner">
                {offers.map((item, i) => (
                    
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    
                ))}
            </section>
        </div>
        </>
    )
}

export default Exclusiveoffer