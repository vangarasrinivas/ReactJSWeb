import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs';
import BrandCRUD from './Components/BrandCRUD';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Layout from './Layout';
import CRUDLocalStorage from './Components/CRUDLocalStorage';
import ScrollBarHorizontal from './Components/ScrollBarHorizontal';
import Timer from './Components/Timer';
import Dragable from './Components/Dragable';
import ImageGallery from './Components/ImageGallery';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/brands" element={<BrandCRUD />} />
          <Route path="/CRUDLocalStorage" element={<CRUDLocalStorage />} />
          <Route path="/scrollbar-progressbar" element={<ScrollBarHorizontal />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/dragable" element={<Dragable />} />
          <Route path="/image-gallery" element={<ImageGallery />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
