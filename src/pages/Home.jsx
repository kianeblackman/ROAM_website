//* Description: renders the Home page of the app

// Import Components
import Button from "../components/Button.jsx"

// Import Images
import romeo from "/img/ROMEO-FULL-COLOR.png"
import roamCover from "/img/roam-front-cover.jpg"
import rocks from '/img/illustration-sm-rocks.png'
import sword from '/img/illustration-sm-sword.png'
import digger from '/img/illustration-sm-digger.png'
import grid from '/img/illustration-sq-grid.png'

function Home() {
  return (
    <div id='home-wrapper'>
      <div id="home-content">
        <div id="hero-section">
          <img id="romeo" src={romeo} alt="Romeo" />
          <h2>FOR <span>THOSE</span> WHO EXPLORE WHAT CAME BEFORE</h2>
          <p className="medium">ROAM is a collaborative anthology, <span><img src={rocks} /></span> exploring the modern ways that people are engaging <span><img src={sword} /></span> with the past.  We hope to unite creatives from different mediums and backgrounds, inspiring cross-discipline collaboration and <span><img src={digger} /></span> an injection of new energy to the modern folk movement.</p>
        </div>
        <div id="order-section">
          <img id="roam-cover" src={roamCover} alt="ROAM Front Cover" />
          <div id="order-details">
            <div id="order-text">
              <h2>VOLUME 1</h2>
              <h2 className="light">2023</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <Button content="Order Now" href="mailto:roamanthology@gmail.com" />
          </div>
        </div>
        <div id="resources-section">
          <div id="resources-details">
            <div id="resources-text">
              <h2>Resources</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <Button path="/resources" content="View Here" />
          </div>
          <img id="roam-cover" src={grid} alt="ROAM Front Cover" />
        </div>
      </div>
    </div>
  )
}

export default Home