Product Management System

1. npm create vite@latest >> project name >> package name >> React >> JavaScript
2. npm install react-router-dom
3. create new folder under src>>pages>>Home
4. Home.jsx, Home.css
// class to className
// img tag should be self closing
5. add routes in App.jsx
    <BrowserRouter>
    <Routes>
      <Route>
    </Routes>
    </BrowserRouter>
    import {BrowserRouter,Routes,Route} from 'react-router-dom'
6. add in App.jsx
      <Route path="/" element={<Home/>}/>
7. create new folder under src>>components>>Navbar // since Navbar will be used in all pages so folder name is components
8. Navbar.jsx, Navbar.css
9. add 
<Navbar/> in Home.jsx
10.
https://mockapi.io/
JSON for data store, transport, readable by any language so json format used.
11. npm install axios //3rd party
12. Home.jsx
a.useEffect() // do something
b. fetchProducts arrow function asynchronous
c. use axios to get data from api made in mockapi.io
d. useState
// data array ma ako xa so [] in useState // object ma ako vaye {} hunthyo
e. data in products array now use .map to loop in products array and show data
added key in the div
13. AddProduct
AddProduct.jsx for a form for creating new product
->mockapi doesnot support type="file"
->input tag should be self closing
->react doesnot support for replace with htmlFor

FIRST APPROACH
->using onChange event with separate function for different input
//     const [productImage, setProductImage] = useState("");
//   const [productName, setProductName] = useState("");
//   const [productDescription, setProductDescription] = useState("");
//   const [productMaterial, setProductMaterial] = useState("");
// console.log(productImage, productName, productDescription, productMaterial);

//   const addProduct = async (e) => {
    // e.preventDefault();

    // const response = await axios.post("https://652fbacd6c756603295d8ec5.mockapi.io/products",{
    //     productImage:productImage,
    //     productNAme:productName,
    //     productDescription:productDescription,
    //     productMaterial:productMaterial
    // })

SECOND APPROACH
->which use "name" attribute 
    // const formData= new FormData(e.currentTarget);
    // console.log(formData.get('productNAme'));
    // console.log(...formData);
    // const data = Object.fromEntries(formData);
    // console.log(data);

    // const response = await axios.post("https://652fbacd6c756603295d8ec5.mockapi.io/products",data)
    // console.log("response",response);

THIRD APPROACH

->  WITH handleChange function for all inputs in onChange event 

  const [data, setData] = useState({
    productImage: "",
    productNAme: "",
    productDescription: "",
    productMaterial: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log("data", data);
  };

  const addProduct = async (e)=>{
    e.preventDefault();
    const respose = await axios.post("https://652fbacd6c756603295d8ec5.mockapi.io/products",data)
    if(respose.status==201){
        navigate("/")
    }
  }

  13. View Single Product
  
  SingleProduct.jsx
  
  14. Delete Product

  axios.delete

  15. Edit Product

  EditProduct.jsx




