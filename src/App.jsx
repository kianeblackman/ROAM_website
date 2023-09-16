//* Description: renders the App component of the app

// Import Statments

import './scss/app.css'
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home.jsx';
import Resources from './pages/Resources.jsx';
import About from './pages/About.jsx';

// Import Components
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div id='app-wrapper'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resources' element={<Resources />} />
      </Routes>
    </div>
  )
}

export default App
