import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={{backgroundColor:"aquamarine", padding:"15px"}}>
            <Link to="/" className='nav-achour'>Home</Link>
            <Link to="/blogs" className='nav-achour'>Blogs</Link>
        </nav>
    )
}

export default Navbar