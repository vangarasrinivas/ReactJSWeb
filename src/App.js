import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Blogs from './Components/Blogs';

function App() {
  return (
    <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
