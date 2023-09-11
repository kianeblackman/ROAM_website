import './app.css'

import roamLogo from './assets/images/ROAM-LOGO-SMALL.png';
import romeoFullColour from './assets/images/ROMEO-FULL-COLOR.png';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='section'>
        <img className='romeo' src={romeoFullColour} alt='logo' />
        <img className='roam-logo' src={roamLogo} alt='logo' />
      </div>
    </div>
  )
}

export default App
