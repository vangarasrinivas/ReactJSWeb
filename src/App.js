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
import BarcodeQrcodeScanner from './Components/BarcodeQrcodeScanner';
import Animations from './Components/Animations';

import AOS from "aos";
import "aos/dist/aos.css";
import CSSTasks from './Components/CSSTasks';

function App() {
  AOS.init();

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
          <Route path="/barcode-qrcode-scanner" element={<BarcodeQrcodeScanner />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/csstasks" element={<CSSTasks />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
