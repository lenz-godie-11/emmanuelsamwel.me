import { Routes, Route } from 'react-router-dom';
import Header from './components/media/media.jsx';
import Footer from './components/extras/extras.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Work from './pages/work.jsx';
import Contact from './pages/contact.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;