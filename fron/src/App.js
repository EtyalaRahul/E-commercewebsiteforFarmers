import './App.css';
import Navbar from './Components/Navbar/Navbar';   
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Home from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_men.jpg';
import women_banner from './Components/Assets/banner_women.jpg';
import kid_banner from './Components/Assets/banner_kids.jpeg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/seeds' element={<ShopCategory banner={men_banner} category="seeds" />} />
          <Route path='/fertilizers' element={<ShopCategory banner={women_banner} category="fertilizers" />} />
          <Route path='/irrigation' element={<ShopCategory banner={kid_banner} category="irrigation" />} />
          <Route path='/product/:productId' element={<Product />} /> {/* Corrected route */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
