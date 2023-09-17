//* Description: renders the App component of the app

// Import Statments
import { Routes, Route } from 'react-router-dom';
import './scss/app.css'

// Import Pages
import Home from './pages/Home.jsx';
import Resources from './pages/Resources.jsx';
import About from './pages/About.jsx';

// Import Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div id='app-wrapper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resources' element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
