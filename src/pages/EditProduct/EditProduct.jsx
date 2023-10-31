import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './EditProduct.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EditProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams();
console.log("id",id);

const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    console.log("product", product);
  };


const[product,setProduct]=useState({});

//edit
const editProduct=async ()=>{
    const response = await axios.put("https://652fbacd6c756603295d8ec5.mockapi.io/products/"+id,product)
    console.log("response",response)
    if(response.status == 200){
        navigate("/");
    }
}
    //fetch single product
    const fetchProduct = async ()=>{
        const response = await axios.get("https://652fbacd6c756603295d8ec5.mockapi.io/products/"+id)
        console.log("response",response)
        setProduct(response.data);
    }

    useEffect(()=>{
        fetchProduct();
    })
        return (
        <>
          <Navbar />
          <div id="product-form">
            <h2>Edit Product</h2>
            <form onSubmit={editProduct}>
              <label htmlFor="productImage">Product Image:</label>
              <input value={product.productImage}
                type="text"
                id="productImage"
                name="productImage"
                onChange={handleChange}
              />
    
              <label htmlFor="productName">Product Name:</label>
              <input value={product.productNAme}
                type="text"
                id="productName"
                name="productName"
                onChange={handleChange}
              />
    
              <label htmlFor="productDescription">Product Description:</label>
              <textarea value={product.productDescription}
                id="productDescription"
                name="productDescription"
                rows="4"
                onChange={handleChange}
              ></textarea>
    
              <label htmlFor="productMaterial">Product Material:</label>
              <input value={product.productMaterial}
                type="text"
                id="productMaterial"
                name="productMaterial"
                onChange={handleChange}
              />
    
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      );
}

export default EditProduct