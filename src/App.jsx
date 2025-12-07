import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './pages/Main';
import Product1 from './pages/Product/Product1'; 
import Solution1 from './pages/Solutions/Solution1'; 
import BlogPage from './pages/Resource/Blog';
import EventPage from './pages/Resource/Event';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />            
        <Route path="/product-1" element={<Product1 />} /> 
        <Route path="/solution-1" element={<Solution1 />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
