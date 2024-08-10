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

    await fetch('https://shopping-website-backend-xb6k.onrender.com/removeproduct',{
<<<<<<< HEAD
 
=======
>>>>>>> bb78435005a6866a6f73e65d039f2af8fe07388e
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
