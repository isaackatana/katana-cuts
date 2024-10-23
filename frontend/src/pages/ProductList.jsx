import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaInstagram, FaSpotify, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching artists:', error));
    }, []);

  return (
    <>
    {products.map((product, index) => (
      <div className="wrapper" key={product.id}>
          <img src={product.image} alt="" />
          <Link to='/products/product/:slug'><h3>{product.name}</h3></Link>
          <div className="social-links">
            <FaCartPlus/>
          </div>
      </div>
    ))}
    </>
  )
}

export default ProductList