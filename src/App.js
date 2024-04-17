import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import Contact from './components/Contact.jsx';
import { Navigation } from './components/Navigation';
import './App.css';
import SupportButton from './components/Support.jsx';
import { Footer } from './components/Footer.jsx';


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <SupportButton/>
      </div>
    </Router>
  );
}

export default App;
