import { useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import './SingleProduct.css'
import { useEffect, useState } from "react"
import axios from "axios"

const SingleProduct = () => {
    const {id} = useParams();
    //store product data coming in object
    const [product,setProduct]=useState({});
    const fetchSingleProduct = async ()=>{
        const response = await axios.get("https://652fbacd6c756603295d8ec5.mockapi.io/products/"+id)
        setProduct(response.data)
    }

    useEffect(()=>{
        fetchSingleProduct()
    },[])
  return (
    <>
    <Navbar/>
    <div className="card">
                <img  src = {product.productImage}alt="Product Image" />
                <h2 className="product-name">{product.productNAme}</h2>
                <p className="product-description">{product.productDescription}</p>
                <mark>{product.productMaterial}</mark>
            </div> 
    </>
  )
}

export default SingleProduct