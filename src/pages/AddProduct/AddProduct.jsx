import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import './AddProduct.css'
import axios from "axios"

const AddProduct = () => {
//First Approach
const [productImage,setProductImage]=useState("")
const [productName,setProductName]=useState("")
const [productDescription,setProductDescription]=useState("")
const [productMaterial,setProductMaterial]=useState("")

const addProduct = async (e)=>{
    e.preventDefault();
        //FIRST APPROACH

    // const response = await axios.post("https://652fbacd6c756603295d8ec5.mockapi.io/products",{
    //     productImage:productImage,
    //     productNAme:productName,
    //     productDescription:productDescription,
    //     productMaterial:productMaterial
    // })

    //SECOND APPROACH
    const formData= new FormData(e.currentTarget);
    console.log(formData.get('productNAme'));
    console.log(...formData);
    const data = Object.fromEntries(formData);
    console.log(data);

    const response = await axios.post("https://652fbacd6c756603295d8ec5.mockapi.io/products",data)
    console.log("response",response);
    
}

console.log(productImage,productName,productDescription,productMaterial);
  return (
    <>
    <Navbar/>
  <div id="product-form">
    <h2>Product Information</h2>
    <form onSubmit={addProduct}>
      {/* <label htmlFor="productImage">Product Image:</label>
      <input type="text" id="productImage" name="productImage" onChange={(e)=>setProductImage(e.target.value)}/>
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" onChange={(e)=>setProductName(e.target.value)}/>
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4" onChange={(e)=>setProductDescription(e.target.value)}></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" onChange={(e)=>setProductMaterial(e.target.value)}/> */}

<label htmlFor="productImage">Product Image:</label>
      <input type="text" id="productImage" name="productImage" />
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" />
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4" ></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" />
      
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  )
}

export default AddProduct