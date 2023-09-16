//* Description: renders the Home page of the app

// Import Statments

// Import Components
import Button from "../components/Button.jsx"

// Import Images
import romeo from "../assets/img/ROMEO-FULL-COLOR.png"
import roamCover from "../assets/img/roam-front-cover.jpg"

function Home() {
  return (
    <div id='home-wrapper'>
      <div id="home-content">
        <div id="hero-section">
          <img id="romeo" src={romeo} alt="Romeo" />
          <h2>FOR <span>THOSE</span> WHO EXPLORE<br />WHAT CAME BEFORE</h2>
          <p className="medium">ROAM is a collaborative anthology, exploring the modern ways that people are engaging with the past. We hope to unite creatives from different mediums and backgrounds, inspiring cross-discipline collaboration and an injection of new energy to the modern folk movement.</p>
        </div>
        <div id="order-section">
          <img id="roam-cover" src={roamCover} alt="ROAM Front Cover" />
          <div id="order-details">
            <div id="order-text">
              <h2>VOLUME 1</h2>
              <h3>2023</h3>
              <hr />
              <p>ROAM is a collaborative anthology, exploring the modern ways that people are engaging with the past. We hope to unite creatives from different mediums and backgrounds, inspiring cross-discipline collaboration and an injection of new energy to the modern folk movement.</p>
            </div>
            <Button content="Order Now" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home