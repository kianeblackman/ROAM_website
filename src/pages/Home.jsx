//* Description: renders the Home page of the app

// Import Statments

// Import Components
import Button from "../components/Button.jsx"

// Import Images
import romeo from "../assets/img/ROMEO-FULL-COLOR.png"
import roamCover from "../assets/img/roam-front-cover.jpg"
import sketch from "../assets/img/sketch-01.png"
import rocks from '../assets/img/illustration-sm-rocks.png'
import sword from '../assets/img/illustration-sm-sword.png'
import digger from '../assets/img/illustration-sm-digger.png'

function Home() {
  return (
    <div id='home-wrapper'>
      <div id="home-content">
        <div id="hero-section">
          <img id="romeo" src={romeo} alt="Romeo" />
          <h2>FOR <span>THOSE</span> WHO EXPLORE<br />WHAT CAME BEFORE</h2>
          <p className="medium">ROAM is a collaborative anthology, <span><img src={rocks} /></span> exploring the modern ways that people are engaging <span><img src={sword} /></span> with the past.  We hope to unite creatives from different mediums and backgrounds, inspiring cross-discipline collaboration and <span><img src={digger} /></span> an injection of new energy to the modern folk movement.</p>
        </div>
        <div id="order-section">
          <img id="roam-cover" src={roamCover} alt="ROAM Front Cover" />
          <div id="order-details">
            <div id="order-text">
              <h2>VOLUME 1</h2>
              <h2 className="light">2023</h2>
              <hr />
              <p>ROAM is a collaborative anthology, exploring the modern ways that people are engaging with the past. We hope to unite creatives from different mediums and backgrounds, inspiring cross-discipline collaboration and an injection of new energy to the modern folk movement.</p>
            </div>
            <Button content="Order Now" href="mailto:roamanthology@gmail.com" />
          </div>
        </div>

        <div id="resources-section">
          <div id="resources-">
            <h2>RESOURCES</h2>
            <p>We are dedicated to the promotion ofdiversity and inclusion in both the heritage world and the folk artistic movement. While this is not a complete list, it is a starting point. We will be managing an inclusion portal on our website in the near future. Please consider helping us by getting in contact to share other groups - of any size - that can be added to this list. For our most up-to-date list, as well as links to each source, click the link below.</p>
            <Button content="View Here" />
          </div>
          <img id="roam-cover" src={sketch} alt="ROAM Front Cover" />
        </div>

      </div>
    </div>
  )
}

export default Home