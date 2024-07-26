import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const routerPath = useLocation()?.pathname;
    return (
        <nav style={{ backgroundColor: "aquamarine", padding: "15px", position:'sticky', top:0, zIndex:999 }}>
            <Link to="/" className={routerPath === '/' ? 'nav-achour text-red' : 'nav-achour'}>Home</Link>
            <Link to="/blogs" className={routerPath === '/blogs' ? 'nav-achour text-red' : 'nav-achour'}>Blogs</Link>
            <Link to="/brands" className={routerPath === '/brands' ? 'nav-achour text-red' : 'nav-achour'}>Brands</Link>
            <Link to="/CRUDLocalStorage" className={routerPath === '/CRUDLocalStorage' ? 'nav-achour text-red' : 'nav-achour'}>CRUD Local Storage</Link>
            <Link to="/scrollbar-progressbar" className={routerPath === '/scrollbar-progressbar' ? 'nav-achour text-red' : 'nav-achour'}>Scrollbar Horizontal</Link>
            <Link to="/timer" className={routerPath === '/timer' ? 'nav-achour text-red' : 'nav-achour'}>Timer</Link>
            <Link to="/dragable" className={routerPath === '/dragable' ? 'nav-achour text-red' : 'nav-achour'}>Dragable</Link>
            <Link to="/image-gallery" className={routerPath === '/image-gallery' ? 'nav-achour text-red' : 'nav-achour'}>Image Gallery</Link>
            <Link to="/barcode-qrcode-scanner" className={routerPath === '/barcode-qrcode-scanner' ? 'nav-achour text-red' : 'nav-achour'}>Barcode QRcode Scanner</Link>
            <Link to="/animations" className={routerPath === '/animations' ? 'nav-achour text-red' : 'nav-achour'}>animations</Link>
            <Link to="/csstasks" className={routerPath === '/csstasks' ? 'nav-achour text-red' : 'nav-achour'}>CSS Tasks</Link>
        </nav>
    )
}

export default Navbar