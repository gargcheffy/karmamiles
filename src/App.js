import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';
import Outings from './pages/Outings';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (

    <div className="App">
      <ScrollToTop />
      <Navbar />
    
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/outings" element={<Outings />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
       <Footer />
    </div>
  );
}

export default App;
