import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import ProductList from './components/producList';
import Home from './components/home';




function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <BrowserRouter>
    <Header />
    <Navbar />
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/ProductList' element={<ProductList />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
