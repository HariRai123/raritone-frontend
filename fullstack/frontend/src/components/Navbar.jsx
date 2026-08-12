import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="navbar">
        <div className="navbar-container">
            <Link to="/" className="logo">
            Raritone
            </Link>
            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </nav>
            <div className="nav-actions">
                <button className="cart-button">
                    <span>0</span>
                </button>
            </div>
        </div>
    </header>    
  )
}

export default Navbar
