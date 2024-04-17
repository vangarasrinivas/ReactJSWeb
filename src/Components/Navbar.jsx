import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const routerPath = useLocation()?.pathname;
    return (
        <nav style={{ backgroundColor: "aquamarine", padding: "15px" }}>
            <Link to="/" className={routerPath === '/' ? 'nav-achour text-red' : 'nav-achour'}>Home</Link>
            <Link to="/blogs" className={routerPath === '/blogs' ? 'nav-achour text-red' : 'nav-achour'}>Blogs</Link>
            <Link to="/brands" className={routerPath === '/brands' ? 'nav-achour text-red' : 'nav-achour'}>Brands</Link>
            <Link to="/CRUDLocalStorage" className={routerPath === '/CRUDLocalStorage' ? 'nav-achour text-red' : 'nav-achour'}>CRUD Local Storage</Link>
            <Link to="/scrollbar-progressbar" className={routerPath === '/scrollbar-progressbar' ? 'nav-achour text-red' : 'nav-achour'}>Scrollbar Horizontal</Link>
            <Link to="/timer" className={routerPath === '/timer' ? 'nav-achour text-red' : 'nav-achour'}>Timer</Link>
            <Link to="/dragable" className={routerPath === '/dragable' ? 'nav-achour text-red' : 'nav-achour'}>Dragable</Link>
            <Link to="/image-gallery" className={routerPath === '/image-gallery' ? 'nav-achour text-red' : 'nav-achour'}>Image Gallery</Link>
        </nav>
    )
}

export default Navbar