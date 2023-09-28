//* Description: renders the Resources page of the app

// Import Statments
import { lgbtqResources, accessibilityResources, racialInequalityResources } from "../data/mappedResources.js"

// Import Components
import ResourcesCard from "../components/ResourcesCard.jsx"

function Resources() {
    return (
        <div id='resources-wrapper'>
            <div id='resources-content'>
                {/* <div id="resources-intro">
                    <h2>Resources</h2>
                    <p>We are dedicated to the promotion of diversity and inclusion in both the heritage world and the folk artistic movement. While this is not a complete list, it is a starting point. We will be managing an inclusion portal on our website in the near future. Please consider helping us by getting in contact to share other groups - of any size - that can be added to this list. For our most up-to-date list, as well as links to each source, click the link below.</p>
                </div> */}
                <div id="resources-body">
                    <div className="resource-section">
                        <h2>LGBTQIA+</h2>
                        <hr />
                        <ul>
                            {lgbtqResources.map((e, index) => (
                                <ResourcesCard key={index} title={e.title} description={e.description} location={e.location} link={e.link} />
                            ))}
                        </ul>
                    </div>
                    <div className="resource-section">
                        <h2>Accessibility</h2>
                        <hr />
                        <ul>
                            {accessibilityResources.map((e, index) => (
                                <ResourcesCard key={index} title={e.title} description={e.description} location={e.location} link={e.link} />
                            ))}
                        </ul>
                    </div>
                    <div className="resource-section">
                        <h2>Communities Experiencing Racial Inequality</h2>
                        <hr />
                        <ul>
                            {racialInequalityResources.map((e, index) => (
                                <ResourcesCard key={index} title={e.title} description={e.description} location={e.location} link={e.link} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources