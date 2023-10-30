import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [products, setProducts]=useState([]) // data array ma ako xa so [] in useState // object ma ako vaye {} hunthyo
    const fetchProducts = async ()=>{
        const response = await axios.get("https://652fbacd6c756603295d8ec5.mockapi.io/products")
        // console.log("Hello Response",response);
        setProducts(response.data)
    }

    useEffect(()=>{
        //do something
        fetchProducts()
    },[])
    // console.log("products",products);

    // class to className
    // img tag should be self closing
  return (
    <>
    <Navbar/>
    <div className="card-container">

    {
        products.map((product)=>{
            return(
                <div key={product.id} className="card">
                <img src={product.productImage} alt="Product Image" />
                <h2 className="product-name">{product.productNAme}</h2>
                <p className="product-description">{product.productDescription}</p>
                <p>{product.productMaterial}</p>
                {/* <a href="/singleProduct"> See More</a> */}
                <Link to={`/singleProduct/${product.id}`}> See More</Link>
            </div> 
            )
        })
    }
</div>
    </>
     )
}

export default Home