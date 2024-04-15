import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs';
import BrandCRUD from './Components/BrandCRUD';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Layout from './Layout';
import CRUDLocalStorage from './Components/CRUDLocalStorage';
import ScrollBarHorizontal from './Components/ScrollBarHorizontal';

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

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
