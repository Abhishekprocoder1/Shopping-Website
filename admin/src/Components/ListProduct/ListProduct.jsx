import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png'
const ListProduct = () => {
    const [allproduct, setAllProduct] = useState([]);

    const fetchInfo = async () => {
        await fetch('https://shopping-website-backend-xb6k.onrender.com/allproducts').then((res) => res.json()).then((data) => {
            setAllProduct(data);
        })
    }

    useEffect(() => {
        fetchInfo();
    }, [])

const remove_product=async(id)=>{
<<<<<<< HEAD
    await fetch('https://shopping-website-backend-xb6k.onrender.com',{
=======
    await fetch('https://shopping-website-backend-xb6k.onrender.com/removeproduct',{
>>>>>>> 93be80afaab4ddafa4bf155dfa903ed2e7e5f6d7
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type':'application/json',
        },
        body: JSON.stringify({id:id})
    })
    await fetchInfo() ;
}

    return (
        <div className='list-product'>
            <h1>All Product List </h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>old Prices</p>
                <p>new Prices</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproduct">
                <hr />
                {
                    allproduct.map((product, index) => {
                        return <>
                         <div key={index} className='listproduct-format-main listproduct-format'>
                            <img src={product.image} alt='' className='listproduct-icon' />
                            <p>{product.name}</p>
                            <p>₹{product.old_price}</p>
                            <p>₹{product.new_price}</p>
                            <p>{product.category}</p>
                            <img  onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon} />
                        </div>
                            <hr />
                        </>
                    })}
            </div>
        </div>
    )
}

export default ListProduct
