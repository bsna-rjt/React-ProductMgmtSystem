
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  // const navigate=useNavigate()
  return (
    <div className="navbar">
    {/* <a href="#">Home</a> */}
    <Link to="/">Home</Link>
    {/* <a href="/addProduct">Add Product</a> */}
    <Link to="/addProduct">Add Product</Link> 
    {/* <button onClick={()=>navigate("/addProduct")}>Add P</button> */}
    {/* <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Portfolio</a>
    <a href="#">Contact</a> */}
</div>
  )
}

export default Navbar