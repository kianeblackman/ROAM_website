//* Description: renders the Home page of the app

// Import Components
import Button from "../components/Button.jsx"
import EmailButton from "../components/EmailButton.jsx"

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
              <p>Aiming to celebrate and preserve diverse folk artistic practices—particularly in light of the overused folk revival moniker — the first issue of ROAM profiles creatives from a diverse range of backgrounds to offer a more inclusive and cross-disciplinary look at the modern folk movement.
                <br /><br />
                The archeologically-inspired contents page of this first issue gives an indication of this fresher approach. 58 artists and creatives are clustered together thematically, branching out across mediums, which include everything from sculpture, film festivals, foraging, scavenger hunts, map-making and more, all engaging folklore in their own ways.
                <br /><br />
                We hope to show through this body of work that the folk art world is branching out in new and exciting directions, rather than stomping old ground.</p>
            </div>
            <EmailButton content="Order Now" href="https://magculture.com/products/roam-1" />
          </div>
        </div>
        <div id="resources-section">
          <div id="resources-details">
            <div id="resources-text">
              <h2>Resources</h2>
              <hr />
              <p className="medium">We are dedicated to the promotion of diversity and inclusion in both the heritage world and the folk artistic movement. While this is not a complete list, it is a starting point.<br /><br />We will be managing an inclusion portal on our website in the near future. Please consider helping us by getting in contact to share other groups - of any size - that can be added to this list. For our most up-to-date list, as well as links to each source, click the link below.</p>
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