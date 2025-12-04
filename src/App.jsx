import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './pages/Main';
import Product1 from './pages/Product/Product1'; 
import Solution1 from './pages/Solutions/Solution1'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />            
        <Route path="/product-1" element={<Product1 />} /> 
        <Route path="/solution-1" element={<Solution1 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
